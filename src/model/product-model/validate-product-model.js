const joi = require("joi");

const schema = joi.object({
  id: joi.number().required(),
  name: joi.string().max(50).required(),
  price: joi.number().required(),
  qty: joi.number().min(1).required(),
  category: joi.string().required(),
  cover: joi.string().allow(""),
  desc: joi.string().max(250).allow(""),
});

const validatecreateProductModel = async (input) => {
  return await schema.validateAsync(input);
};

module.exports = validatecreateProductModel;
