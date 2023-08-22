import { ReactNode, useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useModalDialog = () => {
  const context = useContext(AppContext);

  const show = (
    title: string,
    component: ReactNode,
    footer?: ReactNode,
    width?: number
  ) => {
    context.modalDialogConfig.setValue({
      component,
      footer,
      show: true,
      title,
      width,
    });
  };

  return { show };
};
