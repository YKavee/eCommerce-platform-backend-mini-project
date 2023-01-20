import request from "supertest";
import express from "express";
import router from "../../router";
import ProductManagementService from "../../../service/product-management/product-management-service";
import * as Auth from "../../../middleware/check-auth";

const app = new express();
app.use("/", router);

jest.mock("../../../service/product-management/product-management-service");
jest.mock("../../../middleware/check-auth");

describe("product-management route", () => {
  describe("product-management get all products function", () => {
    let mockGetAll;

    beforeEach(() => {
      mockGetAll = jest.fn().mockReturnValue([
        {
          _id: "1",
          name: "Beans",
          price: 400,
          productImage: "uploads/beans.jpg",
          title: "Beans",
          category: "Vegetable",
        },
        {
          _id: "2",
          name: "Apple",
          price: 350,
          productImage: "uploads/apple.jpg",
          title: "Apple",
          category: "Fruit",
        },
        {
          _id: "3",
          name: "Carrot",
          price: 500,
          productImage: "uploads/carrot.jpg",
          title: "Carrot",
          category: "Vegetable",
        },
      ]);
    });

    test("get all products", async () => {
      ProductManagementService.getAllProducts = mockGetAll;

      const response = await request(app)
        .get(`/products`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    });
  });

  describe("product-management create product function", () => {
    test("create product request", async () => {
      const mockCheckAuth = jest.spyOn(Auth, "checkAuth");
      mockCheckAuth.mockReturnValue({
        email: "user@gmail.com",
        userId: "63c4d7be0777e51412b35b09",
        iat: 1674046552,
        exp: 1674050152,
      });
      jest.spyOn(ProductManagementService, "createProduct").mockReturnValueOnce(
        Promise.resolve({
          _id: "11",
          name: "Strawberry",
          price: 500,
          productImage: "uploads/Strawberry.jpg",
          category: "Fruit",
          title: "Strawberry",
        })
      );

      const response = await request(app)
        .post(`/products`)
        .send({
          _id: "11",
          name: "Strawberry",
          price: 500,
          productImage: "uploads/Strawberry.jpg",
          category: "Fruit",
          title: "Strawberry",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });
});
