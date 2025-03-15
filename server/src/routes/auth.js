import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  loginUserController,
  logoutUserController,
  refreshSessionController,
  registerUserController,
} from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";
import { registerUserValidation } from "../validations/registerUser.js";
import { loginUserValidation } from "../validations/loginUser.js";

export const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(registerUserValidation),
  ctrlWrapper(registerUserController)
);

authRouter.post(
  "/login",
  validateBody(loginUserValidation),
  ctrlWrapper(loginUserController)
);

authRouter.post("/logout", ctrlWrapper(logoutUserController));
authRouter.post("/refresh", ctrlWrapper(refreshSessionController));
