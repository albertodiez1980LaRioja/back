import http from "../../src/shared/services/http/http-service.js";

import EnterpriseModel from '../../src/api/enterprises/enterprises-model.js';
import FundamentalsModel from '../../src/api/fundamentals/fundamentals-model.js';
import config from '../../config/config.js';

import { bloque1, bloque2, bloque3, bloque4, ibex35, cac40, dax40Tickers, chinaTickers } from './tickers-list.js';

async function loadFinancialData() {
   //await loadFundamentsQuarter('year');
   await loadEnterprises();
}

async function loadFundamentsQuarter(period = 'quarter') {
   const enterprisesBD = (await EnterpriseModel.findAll({ attributes: ['symbol'] })).slice(0, 5);;
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   for (const ticker of existingTickers) {
      try {
         const url = 'https://financialmodelingprep.com/stable/income-statement?symbol=' + ticker + '&period=' + period + '&apikey=' + config.secretFinance;
         console.log(url);
         const datas = await http.get(url);
         if (datas && datas.length > 0) {
            for (let data of datas) {
               if (period === 'year') {
                  data.isYearly = true;
               } else {
                  data.isYearly = false;
               }
               await FundamentalsModel.upsert(data, {});
            }
            console.log('Fundamental loaded successfully', ticker);
         } else {
            console.warn('No data found for ticker:', ticker);
         }
      } catch (error) {
         console.error('Error loading fundamentals:',
            error.response ? error.response.data : error.message,
            'status', error.status,
         );
         if (error.status === 429) {
            console.warn('Rate limit exceeded, stopping further requests.');
            break;
         }
      }
   }
}

async function loadEnterprises() {
   const tickers = [...bloque1, ...bloque2, ...bloque3, ...bloque4, ...ibex35, ...cac40, ...dax40Tickers, ...chinaTickers];
   const enterprisesBD = await EnterpriseModel.findAll({ attributes: ['symbol'] });
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   const tickersToLoad = tickers.filter(ticker => !existingTickers.has(ticker));
   console.log('Tickers to load:', tickersToLoad.length);
   try {
      for (const ticker of tickersToLoad) {
         const url = 'https://financialmodelingprep.com/stable/profile?symbol=' + ticker + '&apikey=' + config.secretFinance;
         const data = await http.get(url);
         if (data && data.length > 0) {
            await EnterpriseModel.upsert(data[0], {});
            console.log('Enterprise loaded successfully', ticker, data[0].companyName);
         } else {
            console.warn('No data found for ticker:', ticker);
         }
      }
   } catch (error) {
      console.error('Error loading enterprises:',
         error.response ? error.response.data : error.message,
         'status', error.status
      );
   }
}

export { loadEnterprises, loadFinancialData };