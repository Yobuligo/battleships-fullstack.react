import { ICredentials } from "../shared/model/ICredentials";
import { IUser } from "../shared/model/IUser";
import { Repository } from "./Repository";

class UserRepositoryDefault extends Repository<IUser> {
  create(credentials: ICredentials): Promise<IUser> {
    return new Promise(async (resolve) => {
      const user = await this.add(credentials);
      resolve(user);
    });
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

  findByUsername(username: string): Promise<IUser | undefined> {
    return new Promise((resolve) => {
      const user = this.data.find((user) => user.username === username);
      resolve(user);
    });
  }
}

export const UserRepository = new UserRepositoryDefault();
