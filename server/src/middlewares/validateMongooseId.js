import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const validateMongooseId = (paramName) => (req, res, next) => {
  const id = req.params[paramName];

  if (!isValidObjectId(id)) {
    return next(createHttpError(401, "Id is invalid"));
  }

  next();
};
