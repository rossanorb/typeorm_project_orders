import { Request, Response } from 'express';
import productRepository from '../respositories/product.repository';
import ProductService from '../services/product.service';

export default class ProductController {
  protected service;

  constructor() {
    this.service = new ProductService(productRepository);
  }

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  };
}
