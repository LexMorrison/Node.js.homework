import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import validateBody from "../../decorators/validateBody.js";
import * as contactSchema from "../../models/Contacts.js";
import { isValidId } from "../../middleware/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", isValidId, contactsController.getById);

contactsRouter.post(
  "/",
  validateBody(contactSchema.contactAddSchema),
  contactsController.add
);

contactsRouter.delete(
  "/:id",
  isValidId,
  validateBody(contactSchema.contactAddSchema),
  contactsController.deleteById
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(contactSchema.contactAddSchema),
  contactsController.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(contactSchema.updateFavoriteContactJoiSchema),
  contactsController.updateById
);

export default contactsRouter;
