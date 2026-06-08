import express, { json } from 'express';
import morgan from 'morgan';

const jwt = require('../middlewares/jwt.middleware');
import { sequelize } from "./database/database";
import config from '../config/config';


import RouterPerson from './api/persons/persons-controller';

// initialization
var app = express();


sequelize.authenticate().then(() => sequelize);

for (let table in sequelize.models) {
    const model = sequelize.model(table);
    if (model.asociate != undefined) {
        model.asociate();
    }
}

    sequelize.sync({ force: false }); // sync all tables


app.disable('etag');

// middlewares 

app.use(morgan('dev')); // dev de desarrollo, imprime las llamadas
app.use(json()); // archivos en formato json

// es para que no salga fallo de CORS, si no se pone esto entonces desde el navegador no se lee el JSON
const cors = require('cors');
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
//app.use('/api/places', RouterPlace.router);


export default app;  