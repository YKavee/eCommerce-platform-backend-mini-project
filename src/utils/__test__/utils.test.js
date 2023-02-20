const { userExit, productExit, orderExit } = require("../utils");

//Test cases for User exists method
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

//Test cases for Product exists method
test("productExit function when product exists", async () => {
  const response = [
    {
      _id: "63c8f2814d61b17610f74951",
      id: "1",
      name: "Beans (100g)",
      price: 40,
      qty: 1,
      category: "Vegetable",
      cover: "../images/product/beans.jpg",
      desc: "Organic Broad Beans from our own OrganicSiri® farms. We home deliver trusted healthy organic food in Hyderabad. Broad beans are high in protein and energy; they have a large number of nutrients for their small size.",
      __v: 0,
    },
  ];
  const productExitresponse = await productExit(response);
  expect(productExitresponse).toBeTruthy();
});

test("productExit function when product doesn't exists", async () => {
  const response = [];
  const productExitresponse = await productExit(response);
  expect(productExitresponse).toBeFalsy();
});

//Test cases for Product exists method
test("orderExit function when orders exists to specific user", async () => {
  const response = [
    {
      _id: "63e1fcaa527a2f38142f251a",
      userId: "63cbd77568676a74ae3a7b6b",
      cartProducts: [
        {
          id: "2",
          price: 70,
          quantity: 1,
          totalPrice: 70,
          name: "Carrot (250g)",
          cover: "../images/product/carrot.jpg",
        },
        {
          id: "4",
          price: 140,
          quantity: 1,
          totalPrice: 140,
          name: "Apple (1)",
          cover: "../images/product/apple.jpg",
        },
      ],
      totalPrice: 210,
      __v: 0,
    },
  ];
  const orderExitresponse = await orderExit(response);
  expect(orderExitresponse).toBeTruthy();
});

test("orderExit function when orders doesn't exists to specific user", async () => {
  const response = [];
  const orderExitresponse = await orderExit(response);
  expect(orderExitresponse).toBeFalsy();
});
