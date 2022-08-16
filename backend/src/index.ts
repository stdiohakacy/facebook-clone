import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express();
    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    //Set all routes from routes folder

    app.listen(3000, () => {
      console.log("Server started on port 3000!");
      console.log(connection)
    });
  })
  .catch(error => console.log(error));