import { Request, Response } from 'express';
import { Status } from '../interfaces/out/service-response.interface';
import { OrderServiceInterface as IOrderService } from '../interfaces/services/orderService.interface';

export default class OrderController {
  private readonly orderService: IOrderService;

  constructor(orderService: IOrderService) {
    this.orderService = orderService;
  }

  create = async (request: Request, response: Response): Promise<void> => {
    try {
      const result = await this.orderService.create(request.body);
      response
        .status(result.status === Status.success ? 201 : 500)
        .json(result);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };

  find = async (request: Request, response: Response): Promise<void> => {
    try {
      const result = await this.orderService.find(Number(request.params.id));
      response
        .status(result.status === Status.success ? 200 : 500)
        .json(result);
    } catch (error) {
      console.log(error);
      response.sendStatus(500);
    }
  };
}
