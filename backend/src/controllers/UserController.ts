import { UserRepository } from "../repositories/UserRepository";
import { ICredentials } from "../shared/model/ICredentials";
import { IUser, UserMeta } from "../shared/model/IUser";
import { RepositoryController } from "./RepositoryController";

class UserControllerDefault extends RepositoryController<IUser> {
  constructor() {
    super(UserMeta, UserRepository);
  }
}

export const UserController = new UserControllerDefault();
