"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize({
    dialect: "mariadb",
    host: "localhost",
    port: 3306,
});
//# sourceMappingURL=db.js.map