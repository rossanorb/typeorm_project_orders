import { Request, Response } from 'express';
import CustomerService from '../services/customer.service';
import customerRepository from '../respositories/customer.repository';

export default class CustomerController {
  protected service;

  constructor() {
    this.service = new CustomerService(customerRepository);
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
