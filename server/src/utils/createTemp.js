import { promises as fs } from "fs";
import { IMAGES_DIRECTION, TEMP_DIRECTION } from "../constants/index.js";

export const createTemp = async () => {
  try {
    await fs.access(TEMP_DIRECTION);

    return;
  } catch (err) {
    await fs.mkdir(TEMP_DIRECTION);
    await fs.mkdir(IMAGES_DIRECTION);
  }
};
