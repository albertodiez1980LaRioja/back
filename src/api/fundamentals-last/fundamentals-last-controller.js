import FundamentalsLastService from './fundamentals-last-service.js';
import FundamentalsLastRepository from './fundamentals-last-repository.js';
import FundamentalsLastModel from './fundamentals-last-model.js';
import { Router } from 'express';
const RouterPlace = Router();



import BaseController from '../../shared/base/base-controller.js';

class FundamentalsLastController extends BaseController {
    constructor(service, options = {}) {
        super(service, options);

        this.router = RouterPlace;
        this.router.get('/:symbol', this.getOneEntity.bind(this));
        this.router.get('', this.get.bind(this));

        //this.router.patch('/:id', this.update.bind(this));
        //this.router.delete('/:id', this.delete.bind(this));
        //this.router.post('', this.create.bind(this));
    }



}

export default new FundamentalsLastController(new FundamentalsLastService(new FundamentalsLastRepository(FundamentalsLastModel)));

