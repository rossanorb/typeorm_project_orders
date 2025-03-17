import { Request, Response } from "express";
import CustomerService from "../services/customer.service";
import customerRepository from "../respositories/customer.repository";


export default class CustomerController {

    protected service;

    constructor(){
        this.service = new CustomerService(customerRepository);
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        let result = await this.service.create(req.body);
        return res.status(201).json(result);
    }

}