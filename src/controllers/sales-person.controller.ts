import { Application, IRouterHandler, IRouterMatcher, Request, Response } from 'express';
import SalesPersonService from '../services/sales-person.service';
import salesPersonRepository from '../respositories/sales-person.repository';
export default class SalesPersonController {

    protected service;

    constructor(){        
        this.service = new SalesPersonService(salesPersonRepository);
    };

    create = async (req: Request, res: Response): Promise<Response> => {
        const result = await this.service.create(req.body);        
        return res.status(201).json(result);
    }
}