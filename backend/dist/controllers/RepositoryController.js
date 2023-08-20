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
exports.RepositoryController = void 0;
const Controller_1 = require("./Controller");
class RepositoryController extends Controller_1.Controller {
    constructor(path, repository) {
        super(path);
        this.repository = repository;
        this.add();
        this.findAll();
        this.deleteById();
        this.version();
    }
    add() {
        this.router.post(this.path, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const newEntity = yield this.repository.add(body);
            res.status(201).send(newEntity);
        }));
    }
    deleteById() {
        this.router.delete(`${this.path}/:id`, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const success = yield this.repository.deleteById(parseInt(req.params.id));
            if (success) {
                res.status(200).send(true);
            }
            else {
                res.status(404).send(false);
            }
        }));
    }
    findAll() {
        this.router.get(this.path, (_, res) => __awaiter(this, void 0, void 0, function* () {
            const entities = yield this.repository.findAll();
            res.status(200).send(entities);
        }));
    }
    version() {
        this.router.get(`${this.path}/version`, (_, res) => __awaiter(this, void 0, void 0, function* () {
            const version = yield this.repository.version;
            res.status(200).send(version);
        }));
    }
}
exports.RepositoryController = RepositoryController;
//# sourceMappingURL=RepositoryController.js.map