import bodyParser from "body-parser";
import express from "express";
import { Controller } from "./controllers/Controller";
import { Repository } from "./repositories/Repository";
import { UserMeta } from "./shared/model/IUser";

const server = express();
server.use((_, res, next) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader(
    "access-control-allow-methods",
    "GET, POST, DELETE, PATCH, PUT"
  );
  res.setHeader("access-control-allow-headers", "Content-Type");
  next();
});
server.use(bodyParser.json());
server.use(new Controller(UserMeta.path, new Repository()).router);
server.listen(5000);