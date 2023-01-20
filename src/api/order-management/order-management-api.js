const express = require("express");
const Router = express.Router();
const OrderManagementService = require("../../service/order-management/order-management-service");
const { checkAuth } = require("../../middleware/check-auth");

class OrderManagementApi {
  constructor() {
    Router.post("/", this.createOrder);
    Router.get("/", this.getAllOrders);
  }

  //Retrieve orders
  async getAllOrders(req, res) {
    try {
      // Authenticate the API
      await checkAuth(req.headers.authorization);
      const response = await OrderManagementService.getAllOrders();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //create a new order
  async createOrder(req, res) {
    try {
      // Authenticate the API
      await checkAuth(req.headers.authorization);
      const request = req.body;
      const response = await OrderManagementService.createOrder(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new OrderManagementApi();

module.exports = Router;
