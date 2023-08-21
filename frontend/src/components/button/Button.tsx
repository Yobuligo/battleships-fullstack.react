import { IButtonProps } from "./IButtonProps";
import styles from "./Button.module.css";

export const Button: React.FC<IButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};
