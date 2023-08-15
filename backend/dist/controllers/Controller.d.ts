import { IEntity } from "../shared/types/IEntity";
import { IRepository } from "../shared/types/IRepository";
export declare class Controller<T extends IEntity> {
    private readonly path;
    private readonly repository;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, repository: IRepository<T>);
    private add;
    private findAll;
    private deleteById;
}
