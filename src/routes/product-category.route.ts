import { Router } from 'express';
import ProductCategoryController from '../controllers/product-category.controller';

const controller = new ProductCategoryController();
const productCategoryRouter = Router();

productCategoryRouter.post('/', controller.create);

export default productCategoryRouter;
