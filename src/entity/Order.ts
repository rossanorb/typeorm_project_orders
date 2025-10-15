import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SalesPerson } from './SalesPerson';
import { Customer } from './Customer';

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

  @ManyToOne(() => SalesPerson, salesPerson => salesPerson.order)
  @JoinColumn({ name: 'sales_person_id' })
  salesPerson: SalesPerson;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
