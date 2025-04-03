import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SalesPerson } from "./SalesPerson";
import { Customer } from "./Customer";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    price: number

    @Column({type: "date", nullable:true})
    orderDate:Date

    @Column("int", { nullable: false })
    customer_id: number

    @Column("int", { nullable: false })
    salesPersonId: number

    @ManyToOne(() => SalesPerson, (salesPerson) => salesPerson.order)
    salesPerson:SalesPerson

    @ManyToOne(() => Customer, (customer) => customer.order)
    customer: Customer

}