import OrderInterface from '../in/order.interface';
import OrderInterfaceOut from '../out/order-response.interface';

export interface OrderServiceInterface {
  create(data: OrderInterface): Promise<OrderInterfaceOut>;
  find(id: number): Promise<OrderInterfaceOut>;
}
