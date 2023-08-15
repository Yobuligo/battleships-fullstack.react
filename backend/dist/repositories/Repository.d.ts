import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "../shared/types/IRepository";
export declare class Repository<T extends IEntity> implements IRepository<T> {
    private readonly path;
    private data;
    constructor(path: string);
    add(entity: IEntityDetails<T>): Promise<T>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
}
