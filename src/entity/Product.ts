import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderInfo } from './OrderInfo';
import { ProductCategory } from './ProductCategory';
import { Vendor } from './Vendor';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, nullable: false })
  name: string;

  @Column('int', { nullable: false })
  price: number;

  @Column('int', { name: 'product_category_id', nullable: false })
  productCategoryId: number;

  @Column('int', { name: 'vendor_id', nullable: false })
  vendorId: number;

  @ManyToOne(() => ProductCategory, productCategory => productCategory.products)
  @JoinColumn({ name: 'product_category_id' })
  productCategory: ProductCategory;

  @ManyToOne(() => Vendor, vendor => vendor.products)
  @JoinColumn({ name: 'vendor_id' })
  vendor: Vendor;

  @OneToMany(() => OrderInfo, orderInfo => orderInfo.product)
  orderInfos: OrderInfo[];
}
