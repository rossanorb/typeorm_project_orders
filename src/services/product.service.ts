import { Product } from '../entity';
import ProductInterface from '../interfaces/in/product.interface';
import ProductInterfaceOut from '../interfaces/out/ProductInterfaceOut';
import { Status } from '../interfaces/out/service-response.interface';

export default class ProductService {
  constructor(protected repository) {}

  create = async (data: ProductInterface): Promise<ProductInterfaceOut> => {
    const response: Product | string = await this.repository.create(data);
    if (response instanceof Product) {
      return {
        status: Status.success,
        body: response,
      };
    }

    return {
      status: Status.success,
      error: response,
    };
  };
}
