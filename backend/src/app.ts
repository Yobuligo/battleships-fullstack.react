import bodyParser from "body-parser";
import express from "express";
import { Controller } from "./controllers/Controller";
import { Repository } from "./repositories/Repository";
import { UserMeta } from "./shared/model/IUser";

const server = express();
server.use(bodyParser.json());
server.use(new Controller(UserMeta.path, new Repository(UserMeta.path)).router);
server.listen(5000);
