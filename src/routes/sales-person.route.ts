import { Request, Response, Router } from 'express';
const salesPersonRouter = Router();

salesPersonRouter.get('/', async (_req: Request, res: Response): Promise<any> => {
    return res.status(200).json({
        "route": "Sales Person"
    });
});

export default salesPersonRouter;