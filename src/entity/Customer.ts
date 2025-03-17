import { Entity, Column } from "typeorm";
import { Person } from "./Person";

@Entity()
export class Customer extends Person {
    @Column("varchar", { length: 30 })
    email: string;

    @Column("varchar", { length: 14 })
    phone: string;

    @Column('varchar', { length: 255 })
    address: string

    @Column('varchar', { length: 20 })
    city: string

    @Column('varchar', { length: 2 })
    state: string

    @Column('varchar', { length: 15 })
    postal: string
}
