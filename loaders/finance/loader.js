import http from "../../src/shared/services/http/http-service.js";

import EnterpriseModel from '../../src/api/enterprises/enterprises-model.js';

import { bloque1, bloque2, bloque3, bloque4, ibex35, cac40, dax40Tickers, chinaTickers } from './tickers-list.js';

async function loadFinancialData() {
   //await loadEnterprises();
}

async function load() {
   const tickers = [...bloque1, ...bloque2, ...bloque3, ...bloque4, ...ibex35, ...cac40, ...dax40Tickers, ...chinaTickers];
   const enterprisesBD = await EnterpriseModel.findAll({ attributes: ['symbol'] });
}

async function loadEnterprises() {
   const tickers = [...bloque1, ...bloque2, ...bloque3, ...bloque4, ...ibex35, ...cac40, ...dax40Tickers, ...chinaTickers];
   const enterprisesBD = await EnterpriseModel.findAll({ attributes: ['symbol'] });
   const existingTickers = new Set(enterprisesBD.map(e => e.symbol));
   const tickersToLoad = tickers.filter(ticker => !existingTickers.has(ticker));
   console.log('Tickers to load:', tickersToLoad.length);
   try {
      for (const ticker of tickersToLoad) {
         const url = 'https://financialmodelingprep.com/stable/profile?symbol=' + ticker + '&apikey=SHWsRvVEorVROgWPEVmIvPn3tLZOZeHC';
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