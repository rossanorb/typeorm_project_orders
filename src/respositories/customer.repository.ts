import { AppDataSource } from '../data-source';
import { Customer } from '../entity';
import CustomerInterface from '../interfaces/in/customer.interface';

const create = async (data: CustomerInterface): Promise<Customer | string> => {
  const customer = new Customer();
  customer.first_name = data.firstName;
  customer.last_name = data.lastName;
  customer.number_id = data.numberId;
  customer.email = data.email;
  customer.phone = data.phone;
  customer.address = data.address;
  customer.city = data.city;
  customer.state = data.state;
  customer.postal = data.postal;

  const manager = AppDataSource.manager;

  try {
    return await manager.save(customer);
  } catch (error) {
    return error.message;
  }
};

export default { create };
