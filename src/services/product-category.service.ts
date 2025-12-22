import { ProductCategory } from '../entity';
import ProductCategoryInterface from '../interfaces/in/product-category.interface';
import ProductCategoryInterfaceOut from '../interfaces/out/product-category.interface';
import { Status } from '../interfaces/out/service-response.interface';

export default class ProductCategoryService {
  constructor(protected repository) {}

  create = async (
    data: ProductCategoryInterface
  ): Promise<ProductCategoryInterfaceOut> => {
    const response: ProductCategory | string = await this.repository.create(
      data
    );

    if (response instanceof ProductCategory) {
      return {
        status: Status.success,
        body: response,
      };
    }

    return {
      status: Status.failed,
      error: response,
    };
  };
}
