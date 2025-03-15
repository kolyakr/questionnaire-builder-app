import { Router } from "express";
import { authRouter } from "./auth.js";
import { quizRouter } from "./quiz.js";
import { questionRouter } from "./question.js";

export const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/quiz", quizRouter);
rootRouter.use("/question", questionRouter);
