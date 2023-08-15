import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";

export interface IUser extends IEntity {
  color: string;
}

export const UserMeta: IEntityMeta = { path: "/users" };
