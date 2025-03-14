import { initMongoConnection } from "./db/initMongoConnection.js";
import { startServer } from "./server.js";

const bootstrap = async () => {
  try {
    await initMongoConnection();
    startServer();
  } catch (err) {
    console.log(err);
  }
};

bootstrap();
