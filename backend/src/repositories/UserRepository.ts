import { ICredentials } from "../shared/model/ICredentials";
import { IUser } from "../shared/model/IUser";
import { Repository } from "./Repository";

class UserRepositoryDefault extends Repository<IUser> {
  constructor() {
    super();
  }

  findByCredentials(credentials: ICredentials): Promise<IUser | undefined> {
    return new Promise((resolve) => {
      const user = this.data.find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password
      );
      resolve(user);
    });
  }
}

export const UserRepository = new UserRepositoryDefault();
