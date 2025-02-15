import { Request, Response, Router } from 'express';
import salesPersonRouter from './sales-person.route';

const routers = Router();

routers.use('/sales-person', salesPersonRouter);

export default routers; 