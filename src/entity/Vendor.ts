import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vendor {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length: 50 })
    company_name: string

    @Column('varchar', { length: 50 })
    brand_name: string

    @Column('varchar', { length: 15 })
    ein: number

    @Column('varchar', { length: 14 })
    phone: string

    @Column('varchar')
    address: string

    @Column('varchar', { length: 20 })
    city: string

    @Column('varchar', { length: 2 })
    state: string

    @Column('varchar', { length: 15 })
    postal: string
}