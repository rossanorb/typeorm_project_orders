import { AppDataSource } from '../data-source';
import { Product } from '../entity';
import ProductInterface from '../interfaces/in/product.interface';

const create = async (data: ProductInterface): Promise<Product | string> => {
  const product = new Product();
  product.name = data.name;
  product.price = data.price;
  product.productCategoryId = data.productCategoryId;
  product.vendorId = data.vendorId;

  console.table(product);

  const manager = AppDataSource.manager;

  try {
    return await manager.save(product);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export default { create };
