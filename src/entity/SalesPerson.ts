import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SalesPerson {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    number_id: number

}
