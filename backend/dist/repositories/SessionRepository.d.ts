import { ISession } from "../shared/model/ISession";
import { Repository } from "./Repository";
declare class SessionRepositoryDefault extends Repository<ISession> {
    create(username: string): Promise<ISession>;
}
export declare const SessionRepository: SessionRepositoryDefault;
export {};
