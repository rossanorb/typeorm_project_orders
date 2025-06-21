import { Request, Response } from "express";
import OrderService from "../services/order.service";
import orderRepository from "../respositories/order.repository";

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
        console.log(e)
        res.sendStatus(500)
    }
  };
}
