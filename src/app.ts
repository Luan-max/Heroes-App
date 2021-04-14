import express from "express";
import RouterLoaders  from "./routes/routes";

class App {
  server: any;

  constructor() {
    this.server = express();
    // this.middlewares = middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json)
  }

  routes() {
    RouterLoaders.load(this.server)
  }
}

export default new App().server;
