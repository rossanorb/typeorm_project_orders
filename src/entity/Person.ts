import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 100 })
    first_name: string

    @Column("varchar", { length: 100 })
    last_name: string

    @Column("inet4", { nullable: false })
    number_id: number

}