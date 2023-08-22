"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const SessionRepository_1 = require("../repositories/SessionRepository");
const ISession_1 = require("../shared/model/ISession");
const RepositoryController_1 = require("./RepositoryController");
class SessionControllerDefault extends RepositoryController_1.RepositoryController {
    constructor() {
        super(ISession_1.SessionMeta, SessionRepository_1.SessionRepository);
    }
}
exports.SessionController = new SessionControllerDefault();
//# sourceMappingURL=SessionController.js.map