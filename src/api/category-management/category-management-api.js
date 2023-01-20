const express = require("express");
const Router = express.Router();
const CategoryManagementService = require("../../service/category-management/category-management-service");

class CategoryManagementApi {
  constructor() {
    Router.get("/", this.getAllCategories);
  }

  //Retrieve all categories
  async getAllCategories(req, res) {
    try {
      const response = await CategoryManagementService.getAllCategories();
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new CategoryManagementApi();

module.exports = Router;
