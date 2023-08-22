import { ISession } from "../../../shared/model/ISession";

export interface ILoginProps {
  onLogin: (session: ISession) => void;
}
