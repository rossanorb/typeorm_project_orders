import { Order } from '../../entity';
import OrderInterface from '../in/order.interface';

export interface OrderRepositoryInterface {
  create(data: OrderInterface): Promise<Order | string>;
  find(id: number): Promise<Order | string>;
}
