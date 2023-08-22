import bodyParser from "body-parser";
import express from "express";
import { AccountController } from "./controllers/AccountController";
import { PingController } from "./controllers/PingController";
import { RepositoryController } from "./controllers/RepositoryController";
import { SessionController } from "./controllers/SessionController";
import { UserController } from "./controllers/UserController";
import { Repository } from "./repositories/Repository";
import { ElementMeta } from "./shared/model/IElement";

const server = express();
server.use(bodyParser.json());
server.use((_, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader(
    "access-control-allow-methods",
    "GET, POST, DELETE, PATCH, PUT"
  );
  res.setHeader("access-control-allow-headers", "Content-Type");
  next();
});
server.use(AccountController.router);
server.use(PingController.router);
server.use(SessionController.router);
server.use(UserController.router);
server.use(new RepositoryController(ElementMeta, new Repository()).router);
server.listen(5000);
