const Order = require("../../model/order-model/order-model");

class OrderManagementDao {
  async getAllOrders() {
    const orders = await Order.find({})
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
