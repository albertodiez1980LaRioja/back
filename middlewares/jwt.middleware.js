'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
import Person from '../src/api/users/users-model';

module.exports = async function (req, res, next) {
    if (config.isApiSecured != 'false') {

        if (config.routesWhitelist.includes(req.originalUrl)) {

        }
        else {
            let token = req.body.token || req.query.token || req.headers["x-access-token"];
            if (!token) {
                return res.status(401).send('Invalid token, void');
            }

            try {
                const decoded = jwt.verify(token, config.secret);
                const user = await Person.findAll({
                    where: {
                        user_name: decoded.usuario.user_name, pass: decoded.usuario.pass
                    }
                });
                if (!user || user === undefined) {
                    return res.status(401).send('Invalid token');
                }
                req.user = decoded;
            } catch (err) {
                return res.status(401).send('Invalid token');
            }

        }
    }
    next();
}


