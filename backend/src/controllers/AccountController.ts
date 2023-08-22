import { SessionRepository } from "../repositories/SessionRepository";
import { UserRepository } from "../repositories/UserRepository";
import { AccountMeta } from "../shared/api/IAccount";
import { ICredentials } from "../shared/model/ICredentials";
import { ISession } from "../shared/model/ISession";
import { Controller } from "./Controller";

class AccountControllerDefault extends Controller {
  constructor() {
    super(AccountMeta);
    this.createAccount();
    this.login();
  }

  private createAccount() {
    this.router.post(`${this.path}/create`, async (req, res) => {
      const credentials: ICredentials = req.body;
      const user = await UserRepository.findByUsername(credentials.username);
      if (user) {
        console.log("Create Account: Username already in use");
        res.status(400).send();
      } else {
        console.log("Create Account: Create user and session");
        const user = await UserRepository.create(credentials);
        const session = await SessionRepository.create(user.username);
        res.status(200).send(session);
      }
    });
  }

  private login() {
    this.router.post(`${this.path}/login`, async (req, res) => {
      const credentials: ICredentials = req.body;
      const user = await UserRepository.findByCredentials(credentials);
      if (user) {
        console.log(`User credentials are valid`);
        const session: ISession = await SessionRepository.create(
          credentials.username
        );
        res.status(200).send(session);
      } else {
        console.log(`User credentials are invalid`);
        res.status(404).send();
      }
    });
  }
}

export const AccountController = new AccountControllerDefault();
