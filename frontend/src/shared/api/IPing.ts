import { IEntityMeta } from "../types/IEntityMeta";

export interface IPing {
  run(): Promise<boolean>;
}

export const PingMeta: IEntityMeta = { path: "/ping" };
