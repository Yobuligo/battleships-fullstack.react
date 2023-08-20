import { IMessageProps } from "./IMessageProps";

export const Message: React.FC<IMessageProps> = (props) => {
  return <>{props.message}</>;
};
