import { Router } from "express";

class RouterLoaders {
  router: Router

  constructor() {
    this.router = Router();
  }

  load(app): void {

    app.use(this.router);
  }
}

export default new RouterLoaders();
