import { ISession } from "../shared/model/ISession";
import { RepositoryController } from "./RepositoryController";
declare class SessionControllerDefault extends RepositoryController<ISession> {
    constructor();
}
export declare const SessionController: SessionControllerDefault;
export {};
