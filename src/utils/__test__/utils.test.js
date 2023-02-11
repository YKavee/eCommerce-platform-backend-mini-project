const { userExit } = require("../utils");

test("userExit function when user exists", async () => {
  const userInfo = [
    {
      email: "user@gmail.com",
      password: "$2b$10$4dkO/tDzgK4gXnXA3o3kO.Z1lcKuodHUx8mvO4Dhig.VAfFZBgOWa",
    },
  ];
  const response = await userExit(userInfo);
  expect(response).toBeTruthy();
});

test("userExit function when user doesn't exists", async () => {
  const userInfo = [];
  const response = await userExit(userInfo);
  expect(response).toBeFalsy();
});
