import { Customer } from '../entity';

import CustomerInterface from '../interfaces/in/sales-person.interface';
import CustomerInterfaceOut from '../interfaces/out/customer-response.interface';
import { Status } from '../interfaces/out/service-response.interface';

export default class CustomerService {
  constructor(protected repository) {}

  create = async (data: CustomerInterface): Promise<CustomerInterfaceOut> => {
    const response: Customer | string = await this.repository.create(data);
    if (response instanceof Customer) {
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
