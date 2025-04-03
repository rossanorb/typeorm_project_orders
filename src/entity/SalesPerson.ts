import { Entity, OneToOne } from "typeorm"
import { Person } from "./Person"
import { Order } from "./Order"

@Entity()
export class SalesPerson extends Person {

    @OneToOne(() => Order, (order) => order.salesPerson)
    order: Order
}
