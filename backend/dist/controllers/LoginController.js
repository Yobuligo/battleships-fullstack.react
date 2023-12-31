"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const IAccount_1 = require("../shared/api/IAccount");
const Controller_1 = require("./Controller");
class LoginControllerDefault extends Controller_1.Controller {
    constructor() {
        super(IAccount_1.AccountMeta);
        this.login();
    }
    login() {
        this.router.post(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const credentials = req.body;
            const user = yield UserRepository_1.UserRepository.findByCredentials(credentials);
            if (user) {
                console.log(`User credentials are valid`);
                res.status(200).send(user);
            }
            else {
                console.log(`User credentials are invalid`);
                res.status(404).send();
            }
        }));
    }
}
exports.LoginController = new LoginControllerDefault();
//# sourceMappingURL=LoginController.js.map