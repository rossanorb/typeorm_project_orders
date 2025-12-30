import { Product } from '../../entity';
import ServiceResponseInterface from './service-response.interface';

type body = Product;

interface ProductInterfaceOut extends ServiceResponseInterface {
  body?: body;
}

export default ProductInterfaceOut;
