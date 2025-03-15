import Joi from "joi";
import mongoose from "mongoose";
import { QUESTION_TYPE } from "../constants/index.js";

export const createQuestionValidation = Joi.object({
  type: Joi.string()
    .valid(...Object.values(QUESTION_TYPE))
    .required(),

  text: Joi.string().min(1).max(500).required(),

  variants: Joi.alternatives().conditional("type", {
    is: QUESTION_TYPE.TEXT,
    then: Joi.forbidden(),
    otherwise: Joi.array().items(Joi.string().min(1)).min(1).required(),
  }),

  answers: Joi.array().items(Joi.string().min(1)).min(1).required(),

  order: Joi.number().integer().min(0).required(),

  quizId: Joi.string()
    .custom((value, helpers) => {
      if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.error("any.invalid");
      }
      return value;
    }, "ObjectId Validation")
    .required(),
});
