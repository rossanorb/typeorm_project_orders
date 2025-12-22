import { Router } from 'express';
import customerRouter from './customer.route';
import orderRouter from './order.route';
import productCategoryRouter from './product-category.route';
import salesPersonRouter from './sales-person.route';
import vendorRouter from './vendor.route';

const routers = Router();

routers.use('/sales-person', salesPersonRouter);
routers.use('/customer', customerRouter);
routers.use('/order', orderRouter);
routers.use('/vendor', vendorRouter);
routers.use('/product-category', productCategoryRouter);

export default routers;
