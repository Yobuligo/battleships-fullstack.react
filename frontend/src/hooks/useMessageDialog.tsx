import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Message } from "../features/message/Message";

export const useMessageDialog = () => {
  const context = useContext(AppContext);

  const show = (title: string, message: string) => {
    context.setShowModalDialog(true);
    context.setModalDialogComponent(<Message message={message} />);
  };

  return { show };
};
