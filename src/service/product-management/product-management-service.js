const ProductManagementDao = require("../../dao/product-management/product-management-dao");

class ProductManagementService {
  async getAllProducts() {
    try {
      const response = await ProductManagementDao.getAllProducts();
      return response;
    } catch (error) {
      return error;
    }
  }

  async createProduct(req, res) {
    try {
      const response = await ProductManagementDao.createProduct(req);
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new ProductManagementService();
