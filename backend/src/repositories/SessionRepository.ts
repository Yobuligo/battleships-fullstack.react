import { ISession } from "../shared/model/ISession";
import { Repository } from "./Repository";

class SessionRepositoryDefault extends Repository<ISession> {
  create(username: string): Promise<ISession> {
    return new Promise(async (resolve) => {
      const session = await this.add({ username });
      resolve(session);
    });
  }
}

export const SessionRepository = new SessionRepositoryDefault();
