import { isHttpError } from "http-errors";

export const errorHandler = async (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (isHttpError(err)) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
};
