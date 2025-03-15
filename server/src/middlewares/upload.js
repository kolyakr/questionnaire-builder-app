import multer from "multer";
import { IMAGES_DIRECTION } from "../constants/index.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, IMAGES_DIRECTION);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
