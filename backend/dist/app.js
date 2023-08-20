"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const PingController_1 = require("./controllers/PingController");
const RepositoryController_1 = require("./controllers/RepositoryController");
const Repository_1 = require("./repositories/Repository");
const IElement_1 = require("./shared/model/IElement");
const IUser_1 = require("./shared/model/IUser");
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use((_, res, next) => {
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PATCH, PUT");
    res.setHeader("access-control-allow-headers", "Content-Type");
    next();
});
server.use(new RepositoryController_1.RepositoryController(IUser_1.UserMeta, new Repository_1.Repository()).router);
server.use(new RepositoryController_1.RepositoryController(IElement_1.ElementMeta, new Repository_1.Repository()).router);
server.use(new PingController_1.PingController().router);
server.listen(5000);
//# sourceMappingURL=app.js.map