import { ICredentials } from "../../shared/model/ICredentials";

export class UsernameInvalid extends Error {
  constructor(private credentials: ICredentials) {
    super();
  }
}
