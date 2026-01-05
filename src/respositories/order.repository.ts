import { AppDataSource } from '../data-source';
import { Order, OrderInfo } from '../entity';
import OrderInterface from '../interfaces/in/order.interface';

const create = async (data: OrderInterface): Promise<Order | string> => {
  // Better input validation and error handling
  if (!data.customerId) {
    return 'Customer ID is required';
  }
  if (!data.salesPersonId) {
    return 'Sales Person ID is required';
  }
  if (
    !data.orderInfos ||
    !Array.isArray(data.orderInfos) ||
    data.orderInfos.length === 0
  ) {
    return 'orderInfos is required and must be a non-empty array';
  }

  // Use QueryRunner for transaction
  const queryRunner = AppDataSource.createQueryRunner();

  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {
    // Save the order
    const order = new Order();
    order.customer_id = data.customerId;
    order.sales_person_id = data.salesPersonId;
    order.order_date = data.orderDate || new Date();

    const savedOrder = await queryRunner.manager.save(order);

    // Save each order info item in transaction
    for (const item of data.orderInfos) {
      if (!item.productId || !item.quantity || item.quantity <= 0) {
        throw new Error(
          'Each orderInfo must have a valid productId and quantity > 0'
        );
      }

      const product = await queryRunner.manager
        .getRepository('Product')
        .findOneBy({
          id: item.productId,
        });

      if (!product) {
        throw new Error(`Product with id ${item.productId} not found`);
      }

      const orderInfo = new OrderInfo();
      orderInfo.order_id = savedOrder.id;
      orderInfo.product_id = product.id;
      orderInfo.quantity = item.quantity;
      orderInfo.price = product.price * item.quantity;

      await queryRunner.manager.save(orderInfo);
    }

    // Commit transaction if all succeeds
    await queryRunner.commitTransaction();
    return savedOrder;
  } catch (error) {
    // Rollback transaction if any error occurs
    await queryRunner.rollbackTransaction();
    return typeof error === 'object' && error.message
      ? error.message
      : 'An unknown error occurred during order creation';
  } finally {
    await queryRunner.release();
  }
};

export default { create };
