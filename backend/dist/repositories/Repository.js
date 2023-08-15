"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const IdGenerator_1 = require("../services/IdGenerator");
class Repository {
    constructor(path) {
        this.path = path;
        this.data = [];
    }
    add(entity) {
        return new Promise((resolve) => {
            const newEntity = Object.assign({ id: IdGenerator_1.IdGenerator.next() }, entity);
            this.data.push(newEntity);
            resolve(newEntity);
        });
    }
    deleteById(id) {
        return new Promise((resolve) => {
            const index = this.data.findIndex((element) => element.id === id);
            if (index !== -1) {
                this.data.splice(index, 1);
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
    }
    findAll() {
        return new Promise((resolve) => {
            resolve(this.data);
        });
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map