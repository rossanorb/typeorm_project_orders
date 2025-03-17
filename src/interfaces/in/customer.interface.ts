import PersonInterface from "./person.interface";

interface CustomerInterface extends PersonInterface {
  customer_id?: number;
  email?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  postal: string;
}

export default CustomerInterface;