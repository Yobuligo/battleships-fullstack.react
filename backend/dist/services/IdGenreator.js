"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdGenerator = void 0;
class IdGeneratorDefault {
    constructor() {
        this.cursor = 0;
    }
    next() {
        this.cursor++;
        return this.cursor;
    }
}
exports.IdGenerator = new IdGeneratorDefault();
//# sourceMappingURL=IdGenreator.js.map