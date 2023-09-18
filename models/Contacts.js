import { Schema, model } from "mongoose";
import { handleSaveError, runValidateAtUpdate } from "./hooks.js";
import Joi from "joi";

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

ContactSchema.post("save", handleSaveError);

ContactSchema.pre("findOneAndUpdate", runValidateAtUpdate);
ContactSchema.post("findOneAndUpdate", handleSaveError);

export const contactAddSchema = Joi.object({
  name: Joi.string().messages({
    "any.required": `"message": "missing required 'name' field"`,
  }),
  email: Joi.string().messages({
    "any.required": `"message": "missing required 'email' field"`,
  }),
  phone: Joi.string().messages({
    "any.required": `"message": "missing required 'phone' field"`,
  }),
  favorite: Joi.boolean(),
});

export const updateFavoriteContactJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model("contact", ContactSchema);

export default Contact;
