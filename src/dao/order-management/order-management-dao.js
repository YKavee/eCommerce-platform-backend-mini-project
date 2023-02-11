const Order = require("../../model/order-model/order-model");

class OrderManagementDao {
  async getAllOrders(userInfo) {
    const orders = await Order.find({ userId: userInfo.userId })
      .then((docs) => {
        return docs;
      })
      .catch((err) => {
        return err;
      });
    return orders;
  }

  async createOrder(req, res) {
    const order = await Order.create(req)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return order;
  }
}

module.exports = new OrderManagementDao();
