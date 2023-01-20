const express = require("express");
const Router = express.Router();
const UserManagementService = require("../../service/user-management/user-management-service");

class UserManagementApi {
  constructor() {
    Router.post("/signup", this.postUsers);
    Router.post("/login", this.loginUsers);
  }

  //Create a new User
  async postUsers(req, res) {
    try {
      const request = req.body;
      const response = await UserManagementService.addUser(request);
      res.status(201).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //User Login
  async loginUsers(req, res) {
    try {
      const request = req.body;
      const response = await UserManagementService.loginUser(request);
      res.status(201).send({ message: "Auth Successful", token: response });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

new UserManagementApi();

module.exports = Router;
