import express from "express";
import authController from "../../controllers/auth-controller.js";
import * as userSchema from "../../models/User.js";
import validateBody from "../../decorators/validateBody.js";
import { authenticate } from "../../middleware/index.js";

const authRouter = express.Router();

const userRegisterValidate = validateBody(userSchema.userRegisterSchema);
const userLoginValidate = validateBody(userSchema.userLoginSchema);

authRouter.post("/register", userRegisterValidate, authController.register);

authRouter.post("/login", userLoginValidate, authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);
authRouter.post("/logout", authenticate, authController.logout);
export default authRouter;
