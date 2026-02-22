import { Order } from '../entity';
import OrderInterface from '../interfaces/in/order.interface';
import OrderInterfaceOut from '../interfaces/out/order-response.interface';
import { Status } from '../interfaces/out/service-response.interface';

export default class OrderService {
  constructor(protected repository) {}

  create = async (data: OrderInterface): Promise<OrderInterfaceOut> => {
    const response: Order | string = await this.repository.create(data);

    if (response instanceof Order) {
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

  find = async (id: number): Promise<OrderInterfaceOut> => {
    const response: Order | string = await this.repository.find(id);

    if (response instanceof Order) {
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
