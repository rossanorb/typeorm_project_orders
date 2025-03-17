import PersonInterface from "./person.interface";

interface SalesPersonInterface extends PersonInterface {
    salesperson_id?: number;
    email: string;
    phone: string;    
    address: string    
    city: string    
    state: string    
    postal: string
}

export default SalesPersonInterface;