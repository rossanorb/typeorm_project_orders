import { Router } from 'express';
import SalesPersonController from '../controllers/sales-person.controller';

const controller = new SalesPersonController()
const salesPersonRouter = Router();

salesPersonRouter.post('/', controller.create);

export default salesPersonRouter;