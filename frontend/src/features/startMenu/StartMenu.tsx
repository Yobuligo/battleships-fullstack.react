import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useSession } from "../../hooks/useSession";
import { Login } from "../login/login/Login";
import { IStartMenuProps } from "./IStartMenuProps";
import { StartMenuOptions } from "./startMenuOptions/StartMenuOptions";

export const StartMenu: React.FC<IStartMenuProps> = (props) => {
  const context = useContext(AppContext);
  const session = useSession();

  return (
    <section>
      {session.isLoggedIn() ? (
        <StartMenuOptions />
      ) : (
        <Login onLogin={(session) => context.session.setValue(session)} />
      )}
    </section>
  );
};
