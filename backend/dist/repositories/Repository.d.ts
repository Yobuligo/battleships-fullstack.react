import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
import { IEnvelope } from "../shared/types/IEnvelope";
export declare class Repository<T extends IEntity> implements IRepository<T> {
    protected _version: Date;
    protected data: T[];
    add(entity: IEntityDetails<T>): Promise<T>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<IEnvelope<T[]>>;
    get version(): Promise<Date>;
    private updateVersion;
}
