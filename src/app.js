import express, { json } from 'express';
import morgan from 'morgan';

import jwt from '../middlewares/jwt.middleware.js';
import { sequelize } from "./database/database.js";
import config from '../config/config.js';


import RouterUsers from './api/users/users-controller.js';
import RouterEnterprises from './api/enterprises/enterprises-controller.js';
import RouterFundamentals from './api/fundamentals/fundamentals-controller.js';



import { loadFinancialData } from '../loaders/finance/loader.js';

// initialization
var app = express();


sequelize.authenticate()
    .then(() => {
        for (let table in sequelize.models) {
            const model = sequelize.model(table);
            if (typeof model.asociate === 'function') {
                model.asociate(sequelize.models); 
            }
        }
        return sequelize.sync({ force: false });
    })
    .then(() => {
        loadFinancialData(); 
    })
    .catch(err => {
        console.error('Error crítico en el arranque de la Base de Datos:', err);
    });


app.disable('etag');

// middlewares 

app.use(morgan('dev')); // dev de desarrollo, imprime las llamadas
app.use(json()); // archivos en formato json

// es para que no salga fallo de CORS, si no se pone esto entonces desde el navegador no se lee el JSON
import cors from 'cors';

app.use(cors());

//app.use(bodyParser.json());                                     // parse application/json
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

var requestTime = function (req, res, next) {
    try {
        console.log(`[REQ] ${req.method} ${req.originalUrl}`);
        next();
    } catch (err) {
        next(err);
    }
}


app.use(requestTime);
app.use(jwt);

// routes
app.use('/api/users', RouterUsers.router);
app.use('/api/enterprises', RouterEnterprises.router);



export default app;