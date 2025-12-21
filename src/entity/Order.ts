import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer';
import { OrderInfo } from './OrderInfo';
import { SalesPerson } from './SalesPerson';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date', nullable: true })
  order_date: Date;

  @Column('int', { nullable: false })
  customer_id: number;

  @Column('int', { nullable: false })
  sales_person_id: number;

  @ManyToOne(() => SalesPerson, salesPerson => salesPerson.orders)
  @JoinColumn({ name: 'sales_person_id' })
  salesPerson: SalesPerson;

  @ManyToOne(() => Customer, customer => customer.orders)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => OrderInfo, orderInfo => orderInfo.order)
  orderInfos: OrderInfo[];
}
