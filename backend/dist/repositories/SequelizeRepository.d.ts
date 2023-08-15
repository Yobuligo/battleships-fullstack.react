import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "../shared/types/IRepository";
export declare class SequelizeRepository<T extends IEntity> implements IRepository<T> {
    add(entity: IEntityDetails<T>): Promise<T>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
}
