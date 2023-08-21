import { Message } from "../features/message/Message";
import { useModalDialog } from "./useModalDialog";

export const useMessageDialog = () => {
  const modalDialog = useModalDialog();

  const show = (title: string, message: string, width?: number) => {
    modalDialog.show(title, <Message message={message} />, width);
  };

  return { show };
};
