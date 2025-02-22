import ServiceResponseInterface from "./service-response.interface";
import { SalesPerson } from "../../entity";

type body = SalesPerson;

interface SalesPersonInterfaceOut extends ServiceResponseInterface {
    body?: body
}

export default SalesPersonInterfaceOut;