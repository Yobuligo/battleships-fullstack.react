import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";

export interface IElement extends IEntity {
  color: string;
}

export const ElementMeta: IEntityMeta = { path: "/elements" };
