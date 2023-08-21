import { IEntity } from "../../shared/types/IEntity";
import { IRepository } from "./../../../../backend/src/shared/api/IRepository";

export interface IPollRepository<T extends IEntity> extends IRepository<T> {
  isOutdated: Promise<boolean>;
}
