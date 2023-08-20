import { IMessageHandlerProps } from "./IMessageHandlerProps";

export const MessageHandler: React.FC<IMessageHandlerProps> = (props) => {
  return (
    <>
      <p>{props.message.title}</p>
      {props.message.message}
    </>
  );
};
