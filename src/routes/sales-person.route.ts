import { Router } from 'express';
import SalesPersonController from '../controllers/sales-person.controller';

const controller = new SalesPersonController()
const salesPersonRouter = Router();

salesPersonRouter.get('/',  controller.list);

export default salesPersonRouter;