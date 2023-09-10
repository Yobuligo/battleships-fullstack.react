import { AccountMeta, IAccount } from "../../shared/api/IAccount";
import { ICredentials } from "../../shared/model/ICredentials";
import { ISession } from "../../shared/model/ISession";
import { RESTApi } from "../RESTApi";
import { UnknownUserError } from "./UnknownUserError";
import { UsernameInvalid } from "./UsernameInvalid";

class AccountApiDefault extends RESTApi implements IAccount {
  constructor() {
    super(AccountMeta.path);
  }

  createAccount(credentials: ICredentials): Promise<ISession> {
    return this.createPromise(async (resolve, reject) => {
      const response = await this.post(`${this.url}/create`, credentials);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else {
        reject(new UsernameInvalid(credentials));
      }
    });
  }

  login(credentials: ICredentials): Promise<ISession> {
    return this.createPromise(async (resolve, reject) => {
      const response = await this.post(`${this.url}/login`, credentials);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else {
        reject(new UnknownUserError(credentials));
      }
    });
  }
}

export const AccountApi = new AccountApiDefault();
