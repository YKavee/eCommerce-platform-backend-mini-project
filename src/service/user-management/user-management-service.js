const UserManagementDao = require("../../dao/user-management/user-management-dao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userExit } = require("../../utils/utils");
require("dotenv").config();

class UserManagementService {
  async addUser(req, res) {
    try {
      // get user detail from db
      const userInfo = await UserManagementDao.getUserInfo(req);

      const userExists = await userExit(userInfo);

      if (userExists) {
        throw new Error("User already registered!");
      } else {
        // encrypt the password
        const hashedPass = await new Promise((resolve, reject) => {
          bcrypt.hash(req.password, 10, (err, hash) => {
            if (err) {
              reject(err);
            } else {
              resolve(hash);
            }
          });
        });
        const user = {
          email: req.email,
          password: hashedPass,
        };

        const response = await UserManagementDao.addUser(user);
        return response;
      }
    } catch (error) {
      return error;
    }
  }

  async loginUser(req, res) {
    try {
      // get user detail from db
      const userInfo = await UserManagementDao.getUserInfo(req);

      const userExists = await userExit(userInfo);

      // verify the user and generate the token
      return new Promise((resolve, reject) => {
        if (!userExists) {
          reject(new Error("User not found!"));
        } else {
          bcrypt.compare(req.password, userInfo[0].password, (err, result) => {
            if (err) {
              reject(new Error("Auth failed"));
            }
            if (result) {
              const token = jwt.sign(
                {
                  email: userInfo[0].email,
                  userId: userInfo[0]._id,
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "1h",
                }
              );
              resolve(token);
            }
          });
        }
      });
    } catch (error) {
      return error;
    }
  }
}
module.exports = new UserManagementService();
