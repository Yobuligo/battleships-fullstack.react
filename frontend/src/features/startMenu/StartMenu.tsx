import { useSession } from "../../hooks/useSession";
import { Login } from "../login/Login";
import { IStartMenuProps } from "./IStartMenuProps";
import { StartMenuOptions } from "./options/StartMenuOptions";

export const StartMenu: React.FC<IStartMenuProps> = (props) => {
  const session = useSession();

  return (
    <section>{session.isLoggedIn() ? <StartMenuOptions /> : <Login />}</section>
  );
};
