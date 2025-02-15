import { SalesPerson } from "../entity";
import SalesPersonInterface from "../interfaces/sales-person.interface";

export default class SalesPersonService {

    private repository;

    constructor(repository) {
        this.repository = repository;
    }

    create = async (data: SalesPersonInterface): Promise<object> => {

        const newSalesPerson = await this.repository.create(data);
        if (newSalesPerson instanceof SalesPerson) {
            return {
                'status': 'ok',
                'body': newSalesPerson
            };
        }

        return {
            'status': 'faled',
            'body': {
                'error': newSalesPerson
            }
        };
    }
}