import { IErrorProps } from "./IErrorProps";

export const Error: React.FC<IErrorProps> = (props) => {
  return (
    <>
      <p>An error occurred</p>
      {props.error}
    </>
  );
};
