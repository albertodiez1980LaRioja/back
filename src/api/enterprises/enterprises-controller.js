import EnterpriseService from './enterprises-service.js';
import EnterpriseRepository from './enterprises-repository.js';
import EnterpriseModel from './enterprises-model.js';
import { Router } from 'express';
import config from '../../../config/config.js';
const RouterPlace = Router();



import BaseController from '../../shared/base/base-controller.js';

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