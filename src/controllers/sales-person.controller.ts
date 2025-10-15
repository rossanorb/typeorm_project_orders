import { Request, Response } from 'express';
import SalesPersonService from '../services/sales-person.service';
import salesPersonRepository from '../respositories/sales-person.repository';
export default class SalesPersonController {
  protected service;

  constructor() {
    this.service = new SalesPersonService(salesPersonRepository);
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  };
}
