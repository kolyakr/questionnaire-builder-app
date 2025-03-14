import express from "express";
import { env } from "./utils/env.js";
import cors from "cors";
import pino from "pino-http";
import { rootRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

export const startServer = () => {
  const app = express();
  const mode = env("NODE_ENV", "DEVELOPMENT");

  app.use(
    cors({
      origin: (origin, callback) => {
        console.log("CORS checking Origin:", origin);

        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          console.error("Forbidden Origin:", origin);
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      optionsSuccessStatus: 204,
    })
  );
  app.use(express.json());
  app.use(
    pino({
      transport: {
        target: "pino-pretty",
      },
    })
  );

  app.get("/", (req, res) => {
    res.json({
      result: true,
      message: "This route is runnnig successfully",
    });
  });

  app.use(rootRouter);
  app.use(errorHandler);

  const PORT = env("PORT", 3000);
  app.listen(PORT, () => {
    console.log(`Server id running on port ${PORT} in ${mode} mode`);
  });
};
