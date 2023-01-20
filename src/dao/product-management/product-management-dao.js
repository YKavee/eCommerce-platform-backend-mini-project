const Product = require("../../model/product-model/product-model");

class ProductManagementDao {
  async getAllProducts() {
    const allProducts = await Product.find({})
      .then((docs) => {
        return docs;
      })
      .catch((err) => {
        return err;
      });
    return allProducts;
  }

  async createProduct(req, res) {
    const prodcut = await Product.create(req)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return prodcut;
  }
}
module.exports = new ProductManagementDao();
