import { Vendor } from "../../entity";
import ServiceResponseInterface from "./service-response.interface";

type body = Vendor;

interface VendorInterfaceOut extends ServiceResponseInterface {
    body?: Vendor    
}

export default VendorInterfaceOut;