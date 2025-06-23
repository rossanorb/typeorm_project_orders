import { Response, Request, Router } from 'express';
import VendorController from '../controllers/vendor.controller';

const controller = new VendorController();
const vendorRouter = Router();

vendorRouter.post('/',  controller.create)

export default vendorRouter;