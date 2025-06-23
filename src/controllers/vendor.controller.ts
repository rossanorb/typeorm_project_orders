import { Request, Response } from 'express';
import VendorService from '../services/vendor.service';
import vendorRepository from '../respositories/vendor.repository';

export default class VendorController {
    protected service;

    constructor() {
        this.service = new VendorService(vendorRepository);
    }

    create = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.service.create(req.body);
            res.status(201).json(result);
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    };
}