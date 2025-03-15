import { v2 as cloudinary } from "cloudinary";
import { env } from "./env.js";
import { ENV } from "../constants/index.js";
import fs from "fs/promises";

export const save = async (file) => {
  cloudinary.config({
    cloud_name: env(ENV.CLOUD_NAME),
    api_key: env(ENV.CLOUD_API_KEY),
    api_secret: env(ENV.CLOUD_API_SECRET),
  });

  const uploadResult = await cloudinary.uploader.upload(file.path);
  await fs.unlink(file.path);

  return uploadResult.secure_url;
};

export const saveToCloudinary = async (file) => {
  let imageUrl = null;
  if (file) {
    imageUrl = await save(file);
  }

  return imageUrl;
};
