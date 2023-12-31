import { ICredentials } from "../shared/model/ICredentials";
import { IUser } from "../shared/model/IUser";
import { Repository } from "./Repository";
declare class UserRepositoryDefault extends Repository<IUser> {
    create(credentials: ICredentials): Promise<IUser>;
    findByCredentials(credentials: ICredentials): Promise<IUser | undefined>;
    findByUsername(username: string): Promise<IUser | undefined>;
}
export declare const UserRepository: UserRepositoryDefault;
export {};
