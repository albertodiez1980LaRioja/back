import http from "../../src/shared/services/http/http-service.js";

import EnterpriseModel from '../../src/api/enterprises/enterprises-model.js';
import FundamentalsModel from '../../src/api/fundamentals/fundamentals-model.js';
import PricesModel from '../../src/api/prices/prices-model.js';
import config from '../../config/config.js';

import { tickersEEUU, tickersEuropa, tickersAsia } from './tickers-list.js';

import { Op } from 'sequelize';
import yahooFinance from 'yahoo-finance2';

async function loadFinancialData() {
   // await loadEnterprises();
   //await loadFundaments();
   //await loadPrices();
}

async function loadPrices() {
   const yahooFinanceInstance = new yahooFinance({ suppressNotices: ['yahooSurvey','ripHistorical'] });
   const now = new Date();
   let limitDate = new Date();
   limitDate.setFullYear(limitDate.getFullYear() - 20);
   console.log(limitDate);
   const enterprisesBD = (await FundamentalsModel.findAll({ attributes: ['symbol']/*, where: { symbol: { [Op.notIn]: lastPrices.map(p => p.symbol) } }*/ }));
   console.log(enterprisesBD.length);
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   for (const ticker of existingTickers) {
      try {
         const rows = await yahooFinanceInstance.historical(ticker, {
            period1: limitDate,
            period2: now
         });
         for (let row of rows) {
            row.symbol = ticker;
            await PricesModel.upsert(row, {});
         }
         console.log('Prices loaded successfully', ticker);
      } catch (error) {
         console.error(`Error al traer fundamentales de ${ticker}:`, error);
      }
   }
}

async function loadFundaments() {
   const yahooFinanceInstance = new yahooFinance({ suppressNotices: ['yahooSurvey'] });

   const enterprisesBD = (await EnterpriseModel.findAll({ attributes: ['symbol'] }));
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   //console.log('tickers', existingTickers);
   for (const ticker of existingTickers) {
      try {
         let now = new Date();
         let init = new Date();
         init.setFullYear(init.getFullYear() - 10);
         let balanceSheetDataQuarters = await yahooFinanceInstance.fundamentalsTimeSeries(ticker, {
            period1: init,
            period2: now,
            type: 'quarterly',
            module: 'all'
         });
         let balanceSheetDataYears = await yahooFinanceInstance.fundamentalsTimeSeries(ticker, {
            period1: init,
            period2: now,
            type: 'annual',
            module: 'all'
         });
         for (let data of balanceSheetDataQuarters) {
            data.symbol = ticker;
            data.isYearly = false;
            await FundamentalsModel.upsert(data, {});
         }
         for (let data of balanceSheetDataYears) {
            data.symbol = ticker;
            data.isYearly = true;
            await FundamentalsModel.upsert(data, {});
         }
         console.log('Fundamental loaded successfully', ticker);


      } catch (error) {
         console.error(`Error al traer fundamentales de ${ticker}:`, error);
      }
   }
}

async function loadEnterprises() {
   const yahooFinanceInstance = new yahooFinance({ suppressNotices: ['yahooSurvey'] });
   const tickers = [...tickersEEUU, ...tickersEuropa, ...tickersAsia];
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


export { loadFinancialData };