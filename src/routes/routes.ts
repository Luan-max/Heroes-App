import { Router, Response, Request } from "express";

const routesLoader = Router();

routesLoader.get("/", (req: Request, res: Response) => {
  res.json("Funcionando filho da puta");
});

export { routesLoader };
