import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  createQuestionCtrl,
  deleteQuestionCtrl,
  getQuestionsCtrl,
  updateQuestionCtrl,
} from "../controllers/question.js";
import { validateMongooseId } from "../middlewares/validateMongooseId.js";
import { authorization } from "../middlewares/authorization.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createQuestionValidation } from "../validations/createQuestion.js";
import { upload } from "../middlewares/upload.js";
import { updateQuestionValidation } from "../validations/updateQuestion.js";

export const questionRouter = Router();

questionRouter.use("/:questionId", validateMongooseId("questionId"));

questionRouter.get(
  "/:quizId",
  validateMongooseId("quizId"),
  authorization,
  ctrlWrapper(getQuestionsCtrl)
);
questionRouter.post(
  "/",
  authorization,
  upload.single("image"),
  validateBody(createQuestionValidation),
  ctrlWrapper(createQuestionCtrl)
);
questionRouter.delete(
  "/:questionId",
  authorization,
  ctrlWrapper(deleteQuestionCtrl)
);
questionRouter.patch(
  "/:questionId",
  authorization,
  validateBody(updateQuestionValidation),
  ctrlWrapper(updateQuestionCtrl)
);
