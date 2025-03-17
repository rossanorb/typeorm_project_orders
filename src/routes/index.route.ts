import { Router } from 'express';
import salesPersonRouter from './sales-person.route';
import customerRouter from './customer.route';

const routers = Router();

routers.use('/sales-person', salesPersonRouter);
routers.use('/customer', customerRouter);

export default routers; 