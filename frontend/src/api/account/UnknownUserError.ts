import { ICredentials } from "../../shared/model/ICredentials";

export class UnknownUserError extends Error {
  constructor(private credentials: ICredentials) {
    super();
  }
}
