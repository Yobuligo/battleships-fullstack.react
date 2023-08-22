import { ISession } from "../model/ISession";
import { IEntityMeta } from "../types/IEntityMeta";

export interface ILogin {
  run(): Promise<ISession>;
}

export const LoginMeta: IEntityMeta = { path: "/login" };
