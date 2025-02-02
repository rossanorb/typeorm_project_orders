import { Request, Response, Router } from 'express';
import salesPersonRouter from './sales-person.route';

const routers = Router();

routers.get('/', async (_req: Request, res: Response): Promise<any> => {
    return res.status(200).json({
        "status": "ok",
        "Api type": "Rest",
        "Version": "1.0"
    });
});

routers.use('/sales-person', salesPersonRouter);

export default routers; 