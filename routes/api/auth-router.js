import express from "express";
import authController from "../../controllers/auth-controller.js";

import validateBody from "../../decorators/validateBody.js";
import { authenticate, upload } from "../../middleware/index.js";
import {
  userRegisterSchema,
  userLoginSchema,
  userEmailSchema,
} from "../../middleware/validation/users-validation.js";

const authRouter = express.Router();

const userRegisterValidate = validateBody(userRegisterSchema);
const userLoginValidate = validateBody(userLoginSchema);

authRouter.post("/register", userRegisterValidate, authController.register);

authRouter.post("/login", userLoginValidate, authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);
authRouter.post("/logout", authenticate, authController.logout);
authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);

authRouter.get("/verify/:verificationToken", authController.verify);

authRouter.post(
  "/verify",
  validateBody(userEmailSchema),
  authController.resendVerifyEmail
);

export default authRouter;
