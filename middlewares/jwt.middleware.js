'use strict';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import User from '../src/api/users/users-model.js';

export default async function (req, res, next) {
    if (config.isApiSecured != 'false') {

        if (config.routesWhitelist.includes(req.originalUrl)) {

        }
        else {
            let token = req.body?.token || req.query?.token || req.headers["x-access-token"] || req.headers.authorization;
            if (!token) {
                return res.status(401).send('Invalid token, void');
            }
            try {
                token = token.split(' ')[1];
                const decoded = jwt.verify(token, config.secret);
                const user = await User.findAll({
                    where: {
                        user_name: decoded.usuario.user_name//, pass: decoded.usuario.pass
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


