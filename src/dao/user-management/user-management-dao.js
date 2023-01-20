const User = require("../../model/user-model/user-model");

class ProductManagementDao {
  async addUser(user) {
    const userInfo = await User.create(user)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return userInfo;
  }

  async loginUser(user) {
    const userInfo = await User.find({ email: user.email })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
    return userInfo;
  }
}

module.exports = new ProductManagementDao();
