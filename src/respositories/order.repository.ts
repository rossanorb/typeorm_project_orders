import { AppDataSource } from "../data-source";
import { Order } from "../entity";
import OrderInterface from "../interfaces/in/order.interface";


const create = async (data: OrderInterface): Promise<Order|string> => {
    const order = new Order();
    order.customer_id =  data.customerId;
    order.sales_person_id = data.salesPersonId;
    

    console.log(order);

    const manager = AppDataSource.manager;

    try {
        return await manager.save(order);
    } catch (error) {
        return error.message;
    }
}

export default { create };