import { ICredentials } from "../model/ICredentials";
import { ISession } from "../model/ISession";
import { IEntityMeta } from "../types/IEntityMeta";
export interface IAccount {
    createAccount(credentials: ICredentials): Promise<ISession>;
    login(credentials: ICredentials): Promise<ISession>;
}
export declare const AccountMeta: IEntityMeta;
