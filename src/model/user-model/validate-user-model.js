const joi = require("joi");

const schema = joi.object({
  email: joi.string().max(50).required(),
  password: joi.string().required(),
});

const validatecreateUserModel = async (input) => {
  return await schema.validateAsync(input);
};

module.exports = validatecreateUserModel;
