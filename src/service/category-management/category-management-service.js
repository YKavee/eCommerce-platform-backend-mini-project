const CategoryManagementDao = require("../../dao/category-management/category-management-dao");

class CategoryManagementService {
  async getAllCategories() {
    try {
      const response = await CategoryManagementDao.getAllCategories();
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new CategoryManagementService();
