const joi = require("joi");

const schema = joi.object({
  cartProducts: joi.array().required(),
  totalPrice: joi.number().required(),
});

const validatecreateOrderModel = async (input) => {
  return await schema.validateAsync(input);
};

module.exports = validatecreateOrderModel;
