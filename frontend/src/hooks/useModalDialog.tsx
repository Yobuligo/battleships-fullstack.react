import { ReactNode, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useModalDialog = () => {
  const context = useContext(AppContext);

  const show = (title: string, component: ReactNode, width?: number) => {
    context.setModalDialogConfig({ component, show: true, title, width });
  };

  const close = () => {};

  return { show, close };
};
