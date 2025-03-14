import dotenv from "dotenv";
dotenv.config();

export const env = (value, defaultValue) => {
  if (process.env[value]) return process.env[value];
  if (defaultValue !== undefined) return defaultValue;
  throw new Error(`Value ${value} does not exist or not found`);
};
