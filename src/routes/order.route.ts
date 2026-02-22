import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const controller = new OrderController();
const orderRouter = Router();

orderRouter.post('/', controller.create);
orderRouter.get('/:id', controller.find);

export default orderRouter;
