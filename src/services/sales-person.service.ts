import { SalesPerson } from "../entity";
import SalesPersonInterfaceOut from "../interfaces/out/salesperson-response.interface";
import { Status } from "../interfaces/out/service-response.interface";
import SalesPersonInterface from "../interfaces/in/sales-person.interface";

export default class SalesPersonService {
   
    constructor(protected repository) {}

    create = async (data: SalesPersonInterface): Promise<SalesPersonInterfaceOut> => {

        const response: SalesPerson|string = await this.repository.create(data);
        if (response instanceof SalesPerson) {
            return {
                'status': Status.success,
                'body': response
            };
        }

        return {
            'status': Status.failed,
            'error': response
        };
    }
}