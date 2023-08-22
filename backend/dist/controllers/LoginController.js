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
const ILogin_1 = require("../shared/api/ILogin");
const Controller_1 = require("./Controller");
class LoginController extends Controller_1.Controller {
    constructor() {
        super(ILogin_1.LoginMeta);
        this.login();
    }
    login() {
        this.router.post(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const credentials = req.body;
            const user = yield UserRepository_1.UserRepository.findByCredentials(credentials);
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.status(404).send();
            }
        }));
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=LoginController.js.map