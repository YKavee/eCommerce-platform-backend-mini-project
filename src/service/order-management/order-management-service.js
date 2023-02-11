const OrderManagementDao = require("../../dao/order-management/order-management-dao");

class OrderManagementService {
  async getAllOrders(userInfo) {
    try {
      const response = await OrderManagementDao.getAllOrders(userInfo);
      return response;
    } catch (error) {
      return error;
    }
  }

  async createOrder(userInfo, orderInfo) {
    try {
      const order = {
        userId: userInfo.userId,
        cartProducts: orderInfo.cartProducts,
        totalPrice: orderInfo.totalPrice,
      };

      const response = await OrderManagementDao.createOrder(order);
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new OrderManagementService();
