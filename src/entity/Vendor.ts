import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  company_name: string;

  @Column('varchar', { length: 50 })
  brand_name: string;

  @Column('varchar', { length: 15 })
  ein: number;

  @Column('varchar', { length: 14 })
  phone: string;

  @Column('varchar')
  address: string;

  @Column('varchar', { length: 20 })
  city: string;

  @Column('varchar', { length: 2 })
  state: string;

  @Column('varchar', { length: 15 })
  postal: string;

  @OneToMany(() => Product, product => product.vendor)
  products: Product[];
}
