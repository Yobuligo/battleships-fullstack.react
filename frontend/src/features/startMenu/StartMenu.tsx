import { useSession } from "../../hooks/useSession";
import { Login } from "../login/login/Login";
import { IStartMenuProps } from "./IStartMenuProps";
import { StartMenuOptions } from "./startMenuOptions/StartMenuOptions";

export const StartMenu: React.FC<IStartMenuProps> = (props) => {
  const session = useSession();

  return (
    <section>
      {session.isLoggedIn() ? (
        <StartMenuOptions />
      ) : (
        <Login onLogin={(newSession) => session.update(newSession)} />
      )}
    </section>
  );
};
