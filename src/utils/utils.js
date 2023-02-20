// check if user already registered
exports.userExit = (userInfo) => {
  if (userInfo.length > 0) {
    return true;
  }
};

// check if the products are exists
exports.productExit = (response) => {
  if (response.length > 0) {
    return true;
  }
};

// check if the orders are exists
exports.orderExit = (response) => {
  if (response.length > 0) {
    return true;
  }
};
