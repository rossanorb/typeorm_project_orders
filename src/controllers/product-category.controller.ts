import { Request, Response } from 'express';
import ProductCategoryRepository from '../respositories/product-category.repository';
import ProductCategoryService from '../services/product-category.service';

export default class ProductCategoryController {
  protected service: ProductCategoryService;

  constructor() {
    this.service = new ProductCategoryService(ProductCategoryRepository);
  }

  create = async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    try {
      const result = await this.service.create(req.body);
      res.status(201).json(result);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  };
}
