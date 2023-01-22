import OrderManagementDao from "../../../dao/order-management/order-management-dao";
import OrderManagementService from "../../../service/order-management/order-management-service";

jest.mock("../../../dao/order-management/order-management-dao");

let getAllOrdersMockFunc;
let createOrderMockFunc;

beforeEach(() => {
  getAllOrdersMockFunc = jest.fn().mockReturnValueOnce([
    {
      _id: {
        $oid: "63c98135d3b1913618d3c3ce",
      },
      cartProducts: [
        {
          id: "2",
          price: 350,
          quantity: 1,
          totalPrice: 350,
          name: "Carrot",
          cover: "../images/product/carrot.jpg",
        },
        {
          id: "3",
          price: 350,
          quantity: 1,
          totalPrice: 350,
          name: "Pumkin",
          cover: "../images/product/pumkin.jpg",
        },
      ],
      totalPrice: 700,
    },
    {
      _id: {
        $oid: "63c982003d014fe0cd31be9d",
      },
      cartProducts: [
        {
          id: "2",
          price: 350,
          quantity: 1,
          totalPrice: 350,
          name: "Carrot",
          cover: "../images/product/carrot.jpg",
        },
        {
          id: "3",
          price: 350,
          quantity: 1,
          totalPrice: 350,
          name: "Pumkin",
          cover: "../images/product/pumkin.jpg",
        },
      ],
      totalPrice: 700,
    },
  ]);

  createOrderMockFunc = jest.fn().mockReturnValueOnce([
    {
      cartProducts: [
        {
          id: "2",
          price: 350,
          quantity: 1,
          totalPrice: 350,
          name: "Carrot",
          cover: "../images/product/carrot.jpg",
        },
        {
          id: "3",
          price: 350,
          quantity: 1,
          totalPrice: 350,
          name: "Pumkin",
          cover: "../images/product/pumkin.jpg",
        },
      ],
      totalPrice: 700,
    },
  ]);
});

describe("getAllOrders from service", () => {
  describe("With valid inputs", () => {
    test("get All Orders should call with out any error", async () => {
      OrderManagementDao.getAllOrders = getAllOrdersMockFunc;
      const response = await OrderManagementService.getAllOrders();
      expect(response).toBeDefined();
    });
  });
});

describe("createOrder from service", () => {
  describe("With valid inputs", () => {
    test("create Order should call with out any error", async () => {
      const request = {
        cartProducts: [
          {
            id: "2",
            price: 350,
            quantity: 1,
            totalPrice: 350,
            name: "Carrot",
            cover: "../images/product/carrot.jpg",
          },
          {
            id: "3",
            price: 350,
            quantity: 1,
            totalPrice: 350,
            name: "Pumkin",
            cover: "../images/product/pumkin.jpg",
          },
        ],
        totalPrice: 700,
      };
      OrderManagementDao.createOrder = createOrderMockFunc;
      const response = await OrderManagementService.createOrder(request);
      expect(response).toBeDefined();
    });
  });
});
