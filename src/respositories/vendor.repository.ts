import { AppDataSource } from '../data-source';
import { Vendor } from '../entity';
import VendorInterface from '../interfaces/in/vendor.interface';

const create = async (data: VendorInterface): Promise<Vendor | string> => {
  const vendor = new Vendor();
  vendor.company_name = data.companyName;
  vendor.brand_name = data.brandName;
  vendor.city = data.city;
  vendor.ein = data.ein;
  vendor.phone = data.phone;
  vendor.state = data.state;
  vendor.address = data.address;
  vendor.postal = data.postal;

  console.table(vendor);

  const manager = AppDataSource.manager;

  try {
    return await manager.save(vendor);
  } catch (error) {
    return error.message;
  }
};

export default { create };
