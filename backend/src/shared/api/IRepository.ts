import { IEntity } from "../types/IEntity";
import { IEntityDetails } from "../types/IEntityDetails";

export interface IRepository<T extends IEntity> {
  readonly version: Promise<Date>;
  add(entity: IEntityDetails<T>): Promise<T>;
  deleteById(id: number): Promise<boolean>;
  findAll(): Promise<T[]>;
}
