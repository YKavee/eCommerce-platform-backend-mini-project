import CategoryManagementDao from "../../../dao/category-management/category-management-dao";
import CategoryManagementService from "../../../service/category-management/category-management-service";

jest.mock("../../../dao/category-management/category-management-dao");

let getAllCategoryMockFunc;

beforeEach(() => {
  getAllCategoryMockFunc = jest.fn().mockReturnValueOnce([
    {
      id: "2",
      title: "Vegetable",
    },
    {
      id: "3",
      title: "Fruit",
    },
    {
      id: "4",
      title: "Sea Food",
    },
  ]);
});

describe("getAllCategories from service", () => {
  describe("With valid inputs", () => {
    test("get All Category should call with out any error", async () => {
      CategoryManagementDao.getAllCategories = getAllCategoryMockFunc;
      const response = await CategoryManagementService.getAllCategories();
      expect(response).toBeDefined();
    });
  });
});
