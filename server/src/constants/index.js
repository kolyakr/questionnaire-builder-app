import path from "path";

export const ENV = {
  PORT: "PORT",
  NODE_ENV: "NODE_ENV",
  MONGO_NAME: "MONGO_NAME",
  MONGO_PASSWORD: "MONGO_PASSWORD",
  MONGO_URL: "MONGO_URL",
  MONGO_DB: "MONGO_DB",
  CLOUD_NAME: "CLOUD_NAME",
  CLOUD_API_KEY: "CLOUD_API_KEY",
  CLOUD_API_SECRET: "CLOUD_API_SECRET",
};

export const QUESTION_TYPE = {
  TEXT: "text",
  SINGLE_CHOICE: "single choice",
  MULTIPLE_CHOICE: "multiple choice",
  IMAGE: "image",
};

export const getQuizzesQueryParams = ["name", "amount", "completions"];

export const TEMP_DIRECTION = path.join(process.cwd(), "src", "temp");
export const IMAGES_DIRECTION = path.join(
  process.cwd(),
  "src",
  "temp",
  "images"
);
