import { Request, Response } from 'express';
import SalesPersonService from '../services/sales-person.service';
import salesPersonRepository from '../respositories/sales-person.repository';
import SalesPersonInterface from '../interfaces/sales-person.interface';
export default class SalesPersonController {

    protected service;

    constructor(){        
        this.service = new SalesPersonService(salesPersonRepository);
    };

    create = async (req: Request, res: Response): Promise<any> => {
        const result = await this.service.create(req.body);
        
        return res.status(200).json(result);
    }
}