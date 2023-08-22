import { useState } from "react";
import { Login } from "../login/Login";
import { IStartMenuProps } from "./IStartMenuProps";
import { StartMenuOptions } from "./options/StartMenuOptions";

export const StartMenu: React.FC<IStartMenuProps> = (props) => {
  const [type, setType] = useState("Options");
  return (
    <section>
      {type === "Options" && (
        <StartMenuOptions onLogin={() => setType("Login")} />
      )}
      {type === "Login" && <Login />}
    </section>
  );
};
