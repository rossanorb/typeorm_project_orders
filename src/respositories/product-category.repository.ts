import { AppDataSource } from '../data-source';
import { ProductCategory } from '../entity';
import ProductCategoryInterface from '../interfaces/in/product-category.interface';

const create = async (
  data: ProductCategoryInterface
): Promise<ProductCategory | string> => {
  const productCategory = new ProductCategory();
  productCategory.name = data.name;
  productCategory.description = data.description;
  console.table(productCategory);

  const manager = AppDataSource.manager;

  try {
    return await manager.save(productCategory);
  } catch (error) {
    return error.message;
  }
};

export default { create };
