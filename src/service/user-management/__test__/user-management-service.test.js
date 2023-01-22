import UserManagementDao from "../../../dao/user-management/user-management-dao";
import UserManagementService from "../../../service/user-management/user-management-service";

jest.mock("../../../dao/user-management/user-management-dao");

let signupUserMockFunc;
let getUserInfoMockFunc;

beforeEach(() => {
  signupUserMockFunc = jest.fn().mockReturnValueOnce({
    email: "user@gmail.com",
    password: "$2b$10$4dkO/tDzgK4gXnXA3o3kO.Z1lcKuodHUx8mvO4Dhig.VAfFZBgOWa",
  });

  getUserInfoMockFunc = jest.fn().mockReturnValueOnce({
    email: "user@gmail.com",
    password: "$2b$10$4dkO/tDzgK4gXnXA3o3kO.Z1lcKuodHUx8mvO4Dhig.VAfFZBgOWa",
  });
});

describe("User management service", () => {
  describe("signup user function", () => {
    test("signup should call with out any error", async () => {
      const request = {
        email: "user@gmail.com",
        password: "123",
      };
      UserManagementDao.addUser = signupUserMockFunc;
      const response = await UserManagementService.addUser(request);
      expect(response).toBeDefined();
    });
  });

  describe("login user function", () => {
    test("login should call with out any error", async () => {
      const request = {
        email: "user@gmail.com",
        password: "123",
      };
      const response = await UserManagementService.loginUser(request);
      expect(response).toBeDefined();
    });
  });

  test("userExit function when user exists", async () => {
    const userInfo = [
      {
        email: "user@gmail.com",
        password:
          "$2b$10$4dkO/tDzgK4gXnXA3o3kO.Z1lcKuodHUx8mvO4Dhig.VAfFZBgOWa",
      },
    ];
    const response = await UserManagementService.userExit(userInfo);
    expect(response).toBeTruthy();
  });

  test("userExit function when user doesn't exists", async () => {
    const userInfo = [];
    const response = await UserManagementService.userExit(userInfo);
    expect(response).toBeFalsy();
  });
});
