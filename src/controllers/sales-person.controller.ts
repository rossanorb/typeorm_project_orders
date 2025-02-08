import { Request, Response } from 'express';

export default class PersonSales {

    list = async (_req: Request, res: Response): Promise<any> => {
        return res.status(200).json({
            "Route": "Sales Person - List",
        });
    }
}