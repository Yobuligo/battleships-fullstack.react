import { IEntityMeta } from "../types/IEntityMeta";
export interface IPing {
    ping(): Promise<boolean>;
}
export declare const PingMeta: IEntityMeta;
