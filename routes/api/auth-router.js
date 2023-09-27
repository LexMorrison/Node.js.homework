import express from "express";
import authController from "../../controllers/auth-controller.js";

import validateBody from "../../decorators/validateBody.js";
import { authenticate } from "../../middleware/index.js";
import {
  userRegisterSchema,
  userLoginSchema,
} from "../../middleware/validation/users-validation.js";

const authRouter = express.Router();

const userRegisterValidate = validateBody(userRegisterSchema);
const userLoginValidate = validateBody(userLoginSchema);

authRouter.post("/register", userRegisterValidate, authController.register);

authRouter.post("/login", userLoginValidate, authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);
authRouter.post("/logout", authenticate, authController.logout);
export default authRouter;
