import { Request, Response } from 'express';
import orderRepository from '../respositories/order.repository';
import OrderService from '../services/order.service';

export default class OrderController {
  protected service;

  constructor() {
    this.service = new OrderService(orderRepository);
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

  find = async (request: Request, response: Response): Promise<void> => {
    try {
      const result = await this.service.find(request.params.id);
      response.status(200).json({ result });
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };
}
