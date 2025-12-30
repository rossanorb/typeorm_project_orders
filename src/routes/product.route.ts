import { Router } from 'express';
import ProductController from '../controllers/product-controller';

const controller = new ProductController();
const productRouter = Router();

productRouter.post('/', controller.create);

export default productRouter;
