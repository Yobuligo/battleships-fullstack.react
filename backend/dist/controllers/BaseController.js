"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const express_1 = require("express");
class BaseController {
    constructor(path) {
        this.path = path;
        this.router = (0, express_1.Router)();
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map