import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { isNotNull } from "../utils/isNotNull";

export const useSession = () => {
  const context = useContext(AppContext);

  const isLoggedIn = () => {
    return isNotNull(context.session);
  };

  return { isLoggedIn };
};
