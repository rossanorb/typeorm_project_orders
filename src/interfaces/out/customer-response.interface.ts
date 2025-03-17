import { Customer } from "../../entity";
import ServiceResponseInterface from "./service-response.interface";

type body = Customer;

interface CustomerInterfaceOut  extends ServiceResponseInterface {
    body?: body
}

export default CustomerInterfaceOut;