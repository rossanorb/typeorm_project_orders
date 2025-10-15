import { Order } from '../../entity';
import ServiceResponseInterface from './service-response.interface';

type body = Order;

interface OrderInterfaceOut extends ServiceResponseInterface {
  body?: Order;
}

export default OrderInterfaceOut;
