import request from "supertest";
import express from "express";
import router from "../../router";
import OrderManagementService from "../../../service/order-management/order-management-service";
import * as Auth from "../../../middleware/check-auth";

const app = new express();
app.use("/", router);

jest.mock("../../../service/order-management/order-management-service");
jest.mock("../../../middleware/check-auth");

describe("order-management route", () => {
  describe("order-management get all orders function", () => {
    let mockGetAllOrders;
    beforeEach(() => {
      mockGetAllOrders = jest.fn().mockReturnValue([
        {
          _id: "1",
          product_id: "11",
          customer_id: "1",
          order_status: "Packing",
          total_price: 2000,
          payment_type: "Cash",
        },
        {
          _id: "2",
          product_id: "12",
          customer_id: "1",
          order_status: "Packing",
          total_price: 5000,
          payment_type: "Cash",
        },
      ]);
    });

    test("get all orders", async () => {
      const mockCheckAuth = jest.spyOn(Auth, "checkAuth");
      mockCheckAuth.mockReturnValue({
        email: "user@gmail.com",
        userId: "63c4d7be0777e51412b35b09",
        iat: 1674046552,
        exp: 1674050152,
      });
      OrderManagementService.getAllOrders = mockGetAllOrders;
      const response = await request(app)
        .get(`/orders`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    });
  });

  describe("order-management create order function", () => {
    test("create order request", async () => {
      const mockCheckAuth = jest.spyOn(Auth, "checkAuth");
      mockCheckAuth.mockReturnValue({
        email: "user@gmail.com",
        userId: "63c4d7be0777e51412b35b09",
        iat: 1674046552,
        exp: 1674050152,
      });
      jest.spyOn(OrderManagementService, "createOrder").mockReturnValueOnce(
        Promise.resolve({
          _id: "1",
          product_id: "11",
          customer_id: "1",
          order_status: "Packing",
          total_price: 2000,
          payment_type: "Cash",
        })
      );

      const response = await request(app)
        .post(`/orders`)
        .send({
          _id: "1",
          product_id: "11",
          customer_id: "1",
          order_status: "Packing",
          total_price: 2000,
          payment_type: "Cash",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });
});
