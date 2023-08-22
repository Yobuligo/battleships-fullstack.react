import { ILogin, LoginMeta } from "../shared/api/ILogin";
import { ICredentials } from "../shared/model/ICredentials";
import { ISession } from "../shared/model/ISession";
import { Request } from "./Request";
import { UnknownUserError } from "./UnknownUserError";

class LoginApiDefault extends Request implements ILogin {
  constructor() {
    super(LoginMeta.path);
  }

  login(credentials: ICredentials): Promise<ISession> {
    return this.createPromise(async (resolve, reject) => {
      const response = await this.post(this.url, credentials);
      if (response.ok) {
        const data = await response.json();
        resolve(data);
      } else {
        reject(new UnknownUserError(credentials));
      }
    });
  }
}

export const LoginApi = new LoginApiDefault();
