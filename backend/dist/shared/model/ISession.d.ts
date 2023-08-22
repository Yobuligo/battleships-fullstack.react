import { IEntity } from "../types/IEntity";
import { IEntityMeta } from "../types/IEntityMeta";
export interface ISession extends IEntity {
    username: string;
}
export declare const SessionMeta: IEntityMeta;
