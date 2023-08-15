import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  return <div className={styles.element}></div>;
};
