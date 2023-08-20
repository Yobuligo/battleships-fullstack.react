"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const express_1 = require("express");
class Controller {
    constructor(path) {
        this.router = (0, express_1.Router)();
        if (typeof path === "string") {
            this.path = path;
        }
        else {
            this.path = path.path;
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map