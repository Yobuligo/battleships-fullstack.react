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
exports.UserRepository = void 0;
const Repository_1 = require("./Repository");
class UserRepositoryDefault extends Repository_1.Repository {
    create(credentials) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.add(credentials);
            resolve(user);
        }));
    }
    findByCredentials(credentials) {
        return new Promise((resolve) => {
            const user = this.data.find((user) => user.username === credentials.username &&
                user.password === credentials.password);
            resolve(user);
        });
    }
    findByUsername(username) {
        return new Promise((resolve) => {
            const user = this.data.find((user) => user.username === username);
            resolve(user);
        });
    }
}
exports.UserRepository = new UserRepositoryDefault();
//# sourceMappingURL=UserRepository.js.map