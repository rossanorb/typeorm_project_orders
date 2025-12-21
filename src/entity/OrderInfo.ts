import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';

@Entity()
export class OrderInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  price: number;

  @Column('int', { nullable: false })
  quantity: number;

  @ManyToOne(() => Order, order => order.orderInfos)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Product, product => product.orderInfos)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
