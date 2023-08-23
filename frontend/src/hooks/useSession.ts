import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { isNotNull } from "../utils/isNotNull";
import { ISession } from "../shared/model/ISession";

export const useSession = () => {
  const context = useContext(AppContext);

  const isLoggedIn = () => {
    return isNotNull(context.session.value);
  };

  const update = (session: ISession)=>{
    return context.session.setValue(session)
  }

  return { isLoggedIn, update, ...context.session.value };
};
