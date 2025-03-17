import { AppDataSource } from "../data-source";
import { SalesPerson } from "../entity";
import SalesPersonInterface from "../interfaces/in/sales-person.interface";

const create = async (data: SalesPersonInterface): Promise<SalesPerson | string> => {
    const salesPerson = new SalesPerson();
    salesPerson.first_name = data.firstName;
    salesPerson.last_name = data.lastName;
    salesPerson.number_id = data.numberId;

    const manager = AppDataSource.manager;

    try {
        return await manager.save(salesPerson);
    } catch (error) {
        return error.message;
    }
}

export default { create };