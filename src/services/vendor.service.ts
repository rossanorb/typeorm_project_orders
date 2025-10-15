import { Vendor } from '../entity';
import VendorInterface from '../interfaces/in/vendor.interface';
import VendorInterfaceOut from '../interfaces/out/vendor-response.interface';
import { Status } from '../interfaces/out/service-response.interface';

export default class VendorService {
  constructor(protected repository) {}

  create = async (data: VendorInterface): Promise<VendorInterfaceOut> => {
    const response: Vendor | string = await this.repository.create(data);
    if (response instanceof Vendor) {
      return {
        status: Status.success,
        body: response,
      };
    }

    return {
      status: Status.failed,
      error: response,
    };
  };
}
