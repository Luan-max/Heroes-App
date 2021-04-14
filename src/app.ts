import express from "express";
import { routesLoader } from "./routes/routes";

class App {
  server: any;
  // middlewares: any;
  constructor() {
    this.server = express();
    // this.middlewares = middlewares();
    this.routes();
  }

  routes() {
    this.server.use(routesLoader);
  }
}

export default new App().server;
