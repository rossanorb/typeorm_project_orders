import { Entity, OneToMany } from 'typeorm';
import { Order } from './Order';
import { Person } from './Person';

@Entity()
export class SalesPerson extends Person {
  @OneToMany(() => Order, order => order.salesPerson)
  orders: Order[];
}
