import Joi from "joi";

export const loginUserValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).max(20).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.max": "Password cannot be longer than 20 characters",
    "any.required": "Password is required",
  }),
});
