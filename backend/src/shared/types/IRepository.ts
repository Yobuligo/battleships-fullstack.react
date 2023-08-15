import { IEntity } from "./IEntity";
import { IEntityDetails } from "./IEntityDetails";

export interface IRepository<T extends IEntity> {
  add(entity: IEntityDetails<T>): Promise<T>;
  deleteById(id: number): Promise<boolean>;
  findAll(): Promise<T[]>;
}
