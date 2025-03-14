import createHttpError from "http-errors";

export const notFound = async (req, res, next) => {
  next(createHttpError(404, "Route not found"));
};
