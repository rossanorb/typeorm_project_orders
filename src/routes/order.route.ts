import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import orderRepository from '../respositories/order.repository';
import OrderService from '../services/order.service';

const controller = new OrderController(new OrderService(orderRepository));
const orderRouter = Router();

orderRouter.post('/', controller.create);
orderRouter.get('/:id', controller.find);

export default orderRouter;
