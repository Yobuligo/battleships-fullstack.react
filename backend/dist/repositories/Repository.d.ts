import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IRepository } from "../shared/api/IRepository";
export declare class Repository<T extends IEntity> implements IRepository<T> {
    private _version;
    private data;
    add(entity: IEntityDetails<T>): Promise<T>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
    get version(): Promise<Date>;
    private updateVersion;
}
