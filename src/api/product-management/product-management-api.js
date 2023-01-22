const express = require("express");
const Router = express.Router();
const ProductManagementService = require("../../service/product-management/product-management-service");
const { checkAuth } = require("../../middleware/check-auth");
const validatecreateProductModel = require("../../model/product-model/validate-product-model");

class ProductManagementApi {
  constructor() {
    Router.get("/", this.getAllProducts);
    Router.post("/", this.createProduct);
  }

  //Retrieve all products
  async getAllProducts(req, res) {
    try {
      const response = await ProductManagementService.getAllProducts();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //Create a new product
  async createProduct(req, res) {
    try {
      // Authenticate the API
      await checkAuth(req.headers.authorization);
      const request = req.body;
      await validatecreateProductModel(request);
      const response = await ProductManagementService.createProduct(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new ProductManagementApi();

module.exports = Router;
