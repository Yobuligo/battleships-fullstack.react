"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const IUser_1 = require("../shared/model/IUser");
const RepositoryController_1 = require("./RepositoryController");
class UserControllerDefault extends RepositoryController_1.RepositoryController {
    constructor() {
        super(IUser_1.UserMeta, UserRepository_1.UserRepository);
    }
}
exports.UserController = new UserControllerDefault();
//# sourceMappingURL=UserController.js.map