import Joi from "joi";
import mongoose from "mongoose";

export const updateQuizValidation = Joi.object({
  name: Joi.string().min(3).max(100),
  description: Joi.string().min(10).max(500),
  amountOfQuestions: Joi.number().integer().min(0),
  amountOfCompletions: Joi.number().integer().min(0),
  questionsOrder: Joi.array()
    .items(
      Joi.string().custom((value, helpers) => {
        if (!mongoose.Types.ObjectId.isValid(value)) {
          return helpers.error("any.invalid");
        }
        return value;
      }, "ObjectId Validation")
    )
    .default([]),
  isDraft: Joi.boolean(),
});
