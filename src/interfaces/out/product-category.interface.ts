import { ProductCategory } from '../../entity';
import ServiceResponseInterface from './service-response.interface';

type body = ProductCategory;

interface ProductCategoryInterfaceOut extends ServiceResponseInterface {
  body?: body;
}

export default ProductCategoryInterfaceOut;
