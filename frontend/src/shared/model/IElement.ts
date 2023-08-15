import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";

export interface IElement extends IEntity {
  color: string;
  posX: number;
  posY: number;
}

export const ElementMeta: IEntityMeta = { path: "/elements" };
