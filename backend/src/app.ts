import bodyParser from "body-parser";
import express from "express";
import { PingController } from "./controllers/PingController";
import { RepositoryController } from "./controllers/RepositoryController";
import { Repository } from "./repositories/Repository";
import { ElementMeta } from "./shared/model/IElement";
import { UserMeta } from "./shared/model/IUser";

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
server.use(new RepositoryController(UserMeta, new Repository()).router);
server.use(new RepositoryController(ElementMeta, new Repository()).router);
server.use(new PingController().router);
server.listen(5000);
