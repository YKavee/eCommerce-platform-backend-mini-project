const express = require("express");
const Router = express.Router();
const OrderManagementService = require("../../service/order-management/order-management-service");
const { checkAuth } = require("../../middleware/check-auth");
const validatecreateOrderModel = require("../../model/order-model/validate-order-model");
const { orderExit } = require("../../utils/utils");

class OrderManagementApi {
  constructor() {
    Router.post("/", this.createOrder);
    Router.get("/", this.getAllOrders);
  }

  //Retrieve orders
  async getAllOrders(req, res) {
    try {
      // Authenticate the API
      const userInfo = await checkAuth(req.headers.authorization);
      const response = await OrderManagementService.getAllOrders(userInfo);
      const orderExits = orderExit(response);

      if (!orderExits) {
        return res.status(500).send({
          message: "Orders does not exist",
        });
      } else {
        res.status(200).send(response);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //create a new order
  async createOrder(req, res) {
    try {
      // Authenticate the API
      const userInfo = await checkAuth(req.headers.authorization);
      const request = req.body;
      await validatecreateOrderModel(request);
      const response = await OrderManagementService.createOrder(
        userInfo,
        request
      );
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new OrderManagementApi();

module.exports = Router;
