import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "fb-postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
})

PostgresDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
    // Create a new express application instance
    const app = express();
    // Call middle wares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());
    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    });
    app.get("/", (req, res) => { return res.json({ message: "ABC" }) })
}).catch((err) => {
    console.error("Error during Data Source initialization", err)
})

//Connects to the Database -> then starts the express
// createConnection()
//   .then(async connection => {
//     // Create a new express application instance
//     const app = express();
//     // Call midlewares
//     app.use(cors());
//     app.use(helmet());
//     app.use(bodyParser.json());
//     //Set all routes from routes folder

//     app.listen(3000, () => {
//       console.log("Server started on port 3000!");
//     });
//   })
//   .catch(error => console.log(error));