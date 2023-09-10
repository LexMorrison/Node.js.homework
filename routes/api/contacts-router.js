import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import validateBody from "../../decorators/validateBody.js";
import contactAddSchema from "../../schemas/contact-schemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", contactsController.getById);

contactsRouter.post(
  "/",
  validateBody(contactAddSchema),
  contactsController.add
);

contactsRouter.delete(
  "/:id",
  validateBody(contactAddSchema),
  contactsController.deleteById
);

contactsRouter.put(
  "/:id",
  validateBody(contactAddSchema),
  contactsController.updateById
);

export default contactsRouter;
