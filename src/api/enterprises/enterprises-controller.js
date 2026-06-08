import { EnterpriseService } from './enterprises-service';
import { EnterpriseRepository } from './enterprises-repository';
import EnterpriseModel from './enterprises-model';
import { Router } from 'express';
const jwt = require('jsonwebtoken');
const config = require('../../../config/config');
const RouterPlace = Router();



let { BaseController } = require("../../shared/base/base-controller");

class EnterpriseController extends BaseController {
    constructor(service, options = {}) {
        super(service, options);

        this.router = RouterPlace;
        this.router.get('/:id', this.getOneEntity.bind(this));
        this.router.get('', this.get.bind(this));

        this.router.patch('/:id', this.update.bind(this));
        this.router.delete('/:id', this.delete.bind(this));
        this.router.post('', this.create.bind(this));
    }



}

export default new EnterpriseController(new EnterpriseService(new EnterpriseRepository(EnterpriseModel)));