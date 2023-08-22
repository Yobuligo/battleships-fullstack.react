import { IUser } from "../shared/model/IUser";
import { RepositoryController } from "./RepositoryController";
declare class UserControllerDefault extends RepositoryController<IUser> {
    constructor();
}
export declare const UserController: UserControllerDefault;
export {};
