import { Router } from 'express';
import salesPersonRouter from './sales-person.route';
import customerRouter from './customer.route';
import orderRouter from './order.route';
import vendorRouter from './vendor.route';

const routers = Router();

routers.use('/sales-person', salesPersonRouter);
routers.use('/customer', customerRouter);
routers.use('/order', orderRouter);
routers.use('/vendor', vendorRouter);

export default routers; 