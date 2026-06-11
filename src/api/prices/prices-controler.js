import PricesService from './prices-service.js';
import PricesRepository from './prices-repository.js';
import PricesModel from './prices-model.js';

import { Router } from 'express';
const RouterPlace = Router();



import BaseController from '../../shared/base/base-controller.js';

class PricesController extends BaseController {
    constructor(service, options = {}) {
        super(service, options);

        this.router = RouterPlace;
        this.router.get('/:id', this.getOneEntity.bind(this));
        this.router.get('', this.get.bind(this));

        //this.router.patch('/:id', this.update.bind(this));
        //this.router.delete('/:id', this.delete.bind(this));
        //this.router.post('', this.create.bind(this));
    }



}

export default new PricesController(new PricesService(new PricesRepository(PricesModel)));