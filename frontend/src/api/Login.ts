import { ILogin, LoginMeta } from "../shared/api/ILogin";
import { ISession } from "../shared/model/ISession";
import { Request } from "./Request";

class LoginDefault extends Request implements ILogin {
  constructor() {
    super(LoginMeta.path);
  }

  run(): Promise<ISession> {
    return new Promise(async (resolve) => {
      const response = await this.get(this.url);
      const data = response.json();
      resolve(data);
    });
  }
}

export const Login = new LoginDefault();
