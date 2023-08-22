import { SessionRepository } from "../repositories/SessionRepository";
import { ISession, SessionMeta } from "../shared/model/ISession";
import { RepositoryController } from "./RepositoryController";

class SessionControllerDefault extends RepositoryController<ISession> {
  constructor() {
    super(SessionMeta, SessionRepository);
  }
}

export const SessionController = new SessionControllerDefault();
