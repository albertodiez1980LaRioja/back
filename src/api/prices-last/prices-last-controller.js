import PricesLastService from './prices-last-service.js';
import PricesLastRepository from './prices-last-repository.js';
import PricesLastModel from './prices-last-model.js';

import { Router } from 'express';
const RouterPlace = Router();



import BaseController from '../../shared/base/base-controller.js';

class PricesLastController extends BaseController {
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

export default new PricesLastController(new PricesLastService(new PricesLastRepository(PricesLastModel)));
    