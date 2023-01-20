import ProductManagementDao from "../../../dao/product-management/product-management-dao";
import ProductManagementService from "../../../service/product-management/product-management-service";

jest.mock("../../../dao/product-management/product-management-dao");

let getAllProductsMockFunc;

beforeEach(() => {
  getAllProductsMockFunc = jest.fn().mockReturnValueOnce([
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

describe("getAllProducts from service", () => {
  describe("With valid inputs", () => {
    test("get All Products should call with out any error", async () => {
      ProductManagementDao.getAllProducts = getAllProductsMockFunc;
      const response = await ProductManagementService.getAllProducts();
      expect(response).toBeDefined();
    });
  });
});
