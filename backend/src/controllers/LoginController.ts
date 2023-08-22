import { UserRepository } from "../repositories/UserRepository";
import { LoginMeta } from "../shared/api/ILogin";
import { ICredentials } from "../shared/model/ICredentials";
import { Controller } from "./Controller";

export class LoginController extends Controller {
  constructor() {
    super(LoginMeta);
    this.login();
  }

  private login() {
    this.router.post(this.path, async (req, res) => {
      const credentials: ICredentials = req.body;
      const user = await UserRepository.findByCredentials(credentials);
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send();
      }
    });
  }
}
