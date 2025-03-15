import { initMongoConnection } from "./db/initMongoConnection.js";
import { startServer } from "./server.js";
import { createTemp } from "./utils/createTemp.js";

const bootstrap = async () => {
  try {
    await initMongoConnection();
    await createTemp();
    startServer();
  } catch (err) {
    console.log(err);
  }
};

bootstrap();
