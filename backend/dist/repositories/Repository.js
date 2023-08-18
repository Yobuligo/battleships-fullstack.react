"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const IdGenerator_1 = require("../services/IdGenerator");
const print_1 = require("../shared/utils/print");
class Repository {
    constructor() {
        this._version = new Date();
        this.data = [];
    }
    add(entity) {
        return new Promise((resolve) => {
            (0, print_1.print)(entity, "Entity was added");
            const newEntity = Object.assign({ id: IdGenerator_1.IdGenerator.next() }, entity);
            this.data.push(newEntity);
            this.updateVersion();
            resolve(newEntity);
        });
    }
    deleteById(id) {
        return new Promise((resolve) => {
            const index = this.data.findIndex((element) => element.id === id);
            if (index !== -1) {
                this.data.splice(index, 1);
                this.updateVersion();
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    }
    findAll() {
        return new Promise((resolve) => {
            resolve({ version: this._version, data: this.data });
        });
    }
    get version() {
        return new Promise((resolve) => {
            resolve(this._version);
        });
    }
    updateVersion() {
        this._version = new Date();
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map