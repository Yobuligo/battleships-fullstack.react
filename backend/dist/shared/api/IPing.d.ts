import { IEntityMeta } from "../types/IEntityMeta";
export interface IPing {
    run(): Promise<boolean>;
}
export declare const PingMeta: IEntityMeta;
