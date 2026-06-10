import FundamentalsService from './fundamentals-service.js';
import FundamentalsRepository from './fundamentals-repository.js';
import FundamentalsModel from './fundamentals-model.js';
import { Router } from 'express';
import config from '../../../config/config.js';
const RouterPlace = Router();



import BaseController from '../../shared/base/base-controller.js';

class FundamentalsController extends BaseController {
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

export default new FundamentalsController(new FundamentalsService(new FundamentalsRepository(FundamentalsModel)));