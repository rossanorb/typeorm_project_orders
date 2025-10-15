import { Router } from 'express';
import CustomerController from '../controllers/customer.controller';

const controller = new CustomerController();
const customerRouter = Router();

customerRouter.post('/', controller.create);

export default customerRouter;
