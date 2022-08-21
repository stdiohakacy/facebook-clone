import "reflect-metadata";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import { createExpressServer } from 'routing-controllers';

createConnection()
  .then(async connection => {
    const app = createExpressServer({
      routePrefix: '/api',
      cors: true,
      controllers: [], // we specify controllers we want to use
    });
    app.use(bodyParser.json());
    app.listen(3000, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch(error => console.log(error));