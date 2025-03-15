export const ENV = {
  PORT: "PORT",
  NODE_ENV: "NODE_ENV",
  MONGO_NAME: "MONGO_NAME",
  MONGO_PASSWORD: "MONGO_PASSWORD",
  MONGO_URL: "MONGO_URL",
  MONGO_DB: "MONGO_DB",
};

export const QUESTION_TYPE = {
  TEXT: "text",
  SINGLE_CHOICE: "single choice",
  MULTIPLE_CHOICE: "multiple choice",
  IMAGE: "image",
};

export const getQuizzesQueryParams = ["name", "amount", "completions"];
