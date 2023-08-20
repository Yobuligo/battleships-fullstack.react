import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityMeta } from "../shared/types/IEntityMeta";
import { Controller } from "./Controller";
export declare class RepositoryController<T extends IEntity> extends Controller {
    private readonly repository;
    constructor(path: string | IEntityMeta, repository: IRepository<T>);
    private add;
    private deleteById;
    private findAll;
    private version;
}
