"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const IPing_1 = require("../shared/model/IPing");
const Controller_1 = require("./Controller");
class PingController extends Controller_1.Controller {
    constructor() {
        super(IPing_1.PingMeta);
        this.ping();
    }
    ping() {
        this.router.get(this.path, (_, res) => {
            res.status(200).send(true);
        });
    }
}
exports.PingController = PingController;
//# sourceMappingURL=PingController.js.map