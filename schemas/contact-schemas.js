import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().messages({
    "any.required": `"message": "missing required 'name' field"`,
  }),
  email: Joi.string().messages({
    "any.required": `"message": "missing required 'email' field"`,
  }),
  phone: Joi.string().messages({
    "any.required": `"message": "missing required 'phone' field"`,
  }),
});

export default contactAddSchema;
