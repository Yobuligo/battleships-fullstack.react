import { ICredentials } from "../model/ICredentials";
import { ISession } from "../model/ISession";
import { IEntityMeta } from "../types/IEntityMeta";

export interface ILogin {
  login(credentials: ICredentials): Promise<ISession>;
}

export const LoginMeta: IEntityMeta = { path: "/login" };
