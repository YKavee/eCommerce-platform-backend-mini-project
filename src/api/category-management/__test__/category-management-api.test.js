import request from "supertest";
import express from "express";
import router from "../../router";
import CategoryManagementService from "../../../service/category-management/category-management-service";

const app = new express();
app.use("/", router);

jest.mock("../../../service/category-management/category-management-service");

describe("category-management route", () => {
  describe("category-management get all products function", () => {
    let mockGetAllCategory;
    beforeEach(() => {
      mockGetAllCategory = jest.fn().mockReturnValue([
        {
          _id: "1",
          name: "Beans",
          price: 400,
          productImage: "uploads/beans.jpg",
          title: "Beans",
          category: "Vegetable",
          __v: 0,
        },
        {
          _id: "3",
          name: "Carrot",
          price: 500,
          productImage: "uploads/carrot.jpg",
          title: "Carrot",
          category: "Vegetable",
          __v: 0,
        },
      ]);
    });

    test("get all products by category", async () => {
      CategoryManagementService.getAllCategories = mockGetAllCategory;

      const response = await request(app)
        .get(`/categories`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    });
  });
});
