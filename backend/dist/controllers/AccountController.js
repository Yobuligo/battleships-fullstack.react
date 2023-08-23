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
exports.AccountController = void 0;
const SessionRepository_1 = require("../repositories/SessionRepository");
const UserRepository_1 = require("../repositories/UserRepository");
const IAccount_1 = require("../shared/api/IAccount");
const Controller_1 = require("./Controller");
class AccountControllerDefault extends Controller_1.Controller {
    constructor() {
        super(IAccount_1.AccountMeta);
        this.createAccount();
        this.login();
    }
    createAccount() {
        this.router.post(`${this.path}/create`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const credentials = req.body;
            const user = yield UserRepository_1.UserRepository.findByUsername(credentials.username);
            if (user) {
                console.log("Create Account: Username already in use");
                res.status(400).send();
            }
            else {
                console.log("Create Account: Create user and session");
                const user = yield UserRepository_1.UserRepository.create(credentials);
                const session = yield SessionRepository_1.SessionRepository.create(user.username);
                res.status(200).send(session);
            }
        }));
    }
    login() {
        this.router.post(`${this.path}/login`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const credentials = req.body;
            const user = yield UserRepository_1.UserRepository.findByCredentials(credentials);
            if (user) {
                console.log(`User credentials are valid`);
                const session = yield SessionRepository_1.SessionRepository.create(credentials.username);
                res.status(200).send(session);
            }
            else {
                console.log(`User credentials are invalid`);
                const user = yield UserRepository_1.UserRepository.findByUsername(credentials.username);
                if (user) {
                    res.status(404).send({ error: "UnknownUsername" });
                }
                else {
                    res.status(404).send({ error: "UnknownCredentials" });
                }
            }
        }));
    }
}
exports.AccountController = new AccountControllerDefault();
//# sourceMappingURL=AccountController.js.map