import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  createQuizCtrl,
  deleteQuizCtrl,
  getQuizzesCtrl,
  updateQuizCtrl,
} from "../controllers/quiz.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createQuizValidation } from "../validations/createQuiz.js";
import { authorization } from "../middlewares/authorization.js";
import { validateMongooseId } from "../middlewares/validateMongooseId.js";
import { updateQuizValidation } from "../validations/updateQuiz.js";

export const quizRouter = Router();

quizRouter.use("/:quizId", validateMongooseId("quizId"), authorization);

quizRouter.get("/", ctrlWrapper(getQuizzesCtrl));
quizRouter.post(
  "/",
  authorization,
  validateBody(createQuizValidation),
  ctrlWrapper(createQuizCtrl)
);
quizRouter.delete("/:quizId", ctrlWrapper(deleteQuizCtrl));
quizRouter.patch(
  "/:quizId",
  validateBody(updateQuizValidation),
  ctrlWrapper(updateQuizCtrl)
);
