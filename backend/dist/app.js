"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const Controller_1 = require("./controllers/Controller");
const Repository_1 = require("./repositories/Repository");
const IUser_1 = require("./shared/model/IUser");
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(new Controller_1.Controller(IUser_1.UserMeta.path, new Repository_1.Repository(IUser_1.UserMeta.path)).router);
server.listen(5000);
//# sourceMappingURL=app.js.map