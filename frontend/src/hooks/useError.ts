import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useError = () => {
  const context = useContext(AppContext);

  const show = (error: any) => {
    context.setError(error);
  };

  return { show };
};
