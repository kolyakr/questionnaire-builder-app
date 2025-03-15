import createHttpError from "http-errors";
import { Session } from "../db/models/Session.js";
import { User } from "../db/models/user.js";

export const authorization = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return next(createHttpError(400, "Token not exist or invalid"));
  }

  const [bearer, token] = bearerToken.split(" ");

  if (!bearer || !token || bearer !== "Bearer") {
    return next(createHttpError(401, "Bearer token not exist or invalid"));
  }

  const session = await Session.findOne({
    accessToken: token,
  });

  if (!session) {
    return next(createHttpError(404, "Session not found"));
  }

  if (Date.now() > session.accessTokenValidUntill) {
    return next(createHttpError(401, "Token is expired"));
  }

  const user = await User.findOne({
    _id: session.userId,
  });

  if (!user) {
    return next(404, "User not found or does not exist");
  }

  req.user = user;
  next();
};
