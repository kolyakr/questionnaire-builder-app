import Joi from "joi";
import mongoose from "mongoose";

export const createQuizValidation = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(500).required(),
  amountOfQuestions: Joi.number().integer().min(0).required(),
  amountOfCompletions: Joi.number().integer().min(0).default(0),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
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
  isDraft: Joi.boolean().default(false),
});
