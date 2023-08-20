import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useMessageHandler = () => {
  const context = useContext(AppContext);

  const show = (title: string, message: string) => {
    context.setMessage({ title, message });
  };

  return { show };
};
