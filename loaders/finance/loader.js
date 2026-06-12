import http from "../../src/shared/services/http/http-service.js";

import EnterpriseModel from '../../src/api/enterprises/enterprises-model.js';
//import FundamentalsModel from '../../src/api/fundamentals/fundamentals-model.js';
//import PricesModel from '../../src/api/prices/prices-model.js';
import config from '../../config/config.js';

import { tickersEEUU, tickersEuropa, tickersAsia } from './tickers-list.js';

import { Op } from 'sequelize';
import yahooFinance from 'yahoo-finance2';

async function loadFinancialData() {
   //await loadFundaments();
   //await loadEnterprises();
   //await loadPrices();
}

async function loadPrices() {
   const yahooFinanceInstance = new yahooFinance({ suppressNotices: ['yahooSurvey'] });
   let limitDate = new Date();
   limitDate.setDate(limitDate.getDate() - 1);
   console.log(limitDate);
   const lastPrices = await PricesModel.findAll({ attributes: ['symbol', 'date'], where: { date: { [Op.gte]: limitDate } } });
   const enterprisesBD = (await FundamentalsModel.findAll({ attributes: ['symbol']/*, where: { symbol: { [Op.notIn]: lastPrices.map(p => p.symbol) } }*/ })).slice(0, 5);
   console.log(enterprisesBD.length);
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   let quote = await yahooFinanceInstance.quote('AAPL');
   const data = await yahooFinanceInstance.quoteSummary('AAPL', {
      modules: ["assetProfile"]
   });
   quote.sector = data.assetProfile.sector;
   quote.industry = data.assetProfile.industry;
   quote.country = data.assetProfile.country;
   console.log('apple', quote);
   for (const ticker of existingTickers) {
      console.log(ticker);
      const queryOptions = {
         period1: '2024-01-01', // Ajusta esta fecha según tus necesidades
      };
      //const historicalData = await yahooFinanceInstance.historical(ticker, queryOptions);
      //console.log('data', historicalData);

      /*
      try {
         const url = 'https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=' + ticker + '&apikey=' + config.secretFinance;
         const datas = await http.get(url);
         if (datas && datas.length > 0) {
            for (let data of datas) {
               await PricesModel.upsert(data, {});
            }
         }
      } catch (error) {
         console.error('Error loading prices:',
            error.response ? error.response.data : error.message,
            'status', error.status,
         );
         if (error.status === 429) {
            console.warn('Rate limit exceeded, stopping further requests.');
            break;
         }
      }
         */
   }
}

async function loadFundaments() {
   const yahooFinanceInstance = new yahooFinance({ suppressNotices: ['yahooSurvey'] });
   const fundamentalsBD = (await FundamentalsModel.findAll({ attributes: ['symbol'] })).map(e => e.symbol);
   const enterprisesBD = (await EnterpriseModel.findAll({ attributes: ['symbol'], where: { symbol: { [Op.notIn]: fundamentalsBD } } })).slice(0, 5);
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   for (const ticker of existingTickers) {
      try {
         const modules = [

            //'fundamentalsTimeSeries',
            'defaultKeyStatistics',    // Ratios clave (PER, Beta, Profit Margins...)
            'financialData'            // Datos financieros actuales (Efectivo, Deuda...)
         ];

         const result = await yahooFinanceInstance.quoteSummary(ticker, { modules });

         //console.log('Datos fundamentales recibidos:', result);
         return result;

      } catch (error) {
         console.error(`Error al traer fundamentales de ${ticker}:`, error.message);
      }
   }
}

async function loadEnterprises() {
   const yahooFinanceInstance = new yahooFinance({ suppressNotices: ['yahooSurvey'] });
   const tickers = [...tickersEEUU, ...tickersEuropa, ...tickersAsia ];
   console.log('total tickers', tickers.length);
   const enterprisesBD = await EnterpriseModel.findAll({ attributes: ['symbol'] });
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   const tickersToLoad = tickers.filter(ticker => !existingTickers.has(ticker));
   console.log('Tickers to load:', tickersToLoad.length, tickers.length);
   let enterprisesLoaded = [];
   let enterprisesNotLoaded = [];
   for (const ticker of tickersToLoad) {
      try {
         let dataTicker = await yahooFinanceInstance.quote(ticker);
         const data = await yahooFinanceInstance.quoteSummary(ticker, {
            modules: ["assetProfile"]
         });
         if (dataTicker) {
            dataTicker.sector = data.assetProfile.sector;
            dataTicker.industry = data.assetProfile.industry;
            dataTicker.country = data.assetProfile.country;
            await EnterpriseModel.upsert(dataTicker, {});
            enterprisesLoaded.push(ticker);
            console.log('Enterprise loaded successfully', ticker, dataTicker.shortName);
         }
         else {
            console.warn('No data found for ticker:', ticker);
            enterprisesNotLoaded.push(ticker);
         }
      } catch (error) {
         console.error('Error loading enterprises', error);
         enterprisesNotLoaded.push(ticker);
      }
      
   }
   console.log('Enterprises', enterprisesLoaded, enterprisesNotLoaded);
}


export { loadEnterprises, loadFinancialData };