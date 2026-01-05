import { OrderInfo } from '../../entity/OrderInfo';

type OrderInfoInput = Omit<
  OrderInfo,
  'id' | 'order' | 'product' | 'price' | 'orderId'
> & {
  productId: number;
};

interface OrderInterface {
  customerId: number;
  salesPersonId: number;
  orderDate?: Date;
  orderInfos: Array<OrderInfoInput>;
}

export default OrderInterface;
