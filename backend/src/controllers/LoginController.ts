import { UserRepository } from "../repositories/UserRepository";
import { LoginMeta } from "../shared/api/ILogin";
import { ICredentials } from "../shared/model/ICredentials";
import { Controller } from "./Controller";

class LoginControllerDefault extends Controller {
  constructor() {
    super(LoginMeta);
    this.login();
  }

  private login() {
    this.router.post(this.path, async (req, res) => {
      const credentials: ICredentials = req.body;
      const user = await UserRepository.findByCredentials(credentials);
      if (user) {
        console.log(`User credentials are valid`);
        res.status(200).send(user);
      } else {
        console.log(`User credentials are invalid`);
        res.status(404).send();
      }
    });
  }
}

export const LoginController = new LoginControllerDefault();
