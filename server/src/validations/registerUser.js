import Joi from "joi";

export const registerUserValidation = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot be longer than 30 characters",
    "any.required": "Name is required",
  }),
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
