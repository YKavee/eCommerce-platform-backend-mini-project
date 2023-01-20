const Category = require("../../model/category-model/category-model");

class CategoryManagementDao {
  async getAllCategories() {
    const allCategories = await Category.find({})
      .then((docs) => {
        return docs;
      })
      .catch((err) => {
        return err;
      });
    return allCategories;
  }
}
module.exports = new CategoryManagementDao();
