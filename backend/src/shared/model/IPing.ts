import { IEntityMeta } from "../types/IEntityMeta";

export interface IPing {
  ping(): Promise<boolean>;
}

export const PingMeta: IEntityMeta = { path: "/ping" };
