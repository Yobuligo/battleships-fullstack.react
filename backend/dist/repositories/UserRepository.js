"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const Repository_1 = require("./Repository");
class UserRepositoryDefault extends Repository_1.Repository {
    constructor() {
        super();
    }
    findByCredentials(credentials) {
        return new Promise((resolve) => {
            const user = this.data.find((user) => user.username === credentials.username &&
                user.password === credentials.password);
            resolve(user);
        });
    }
}
exports.UserRepository = new UserRepositoryDefault();
//# sourceMappingURL=UserRepository.js.map