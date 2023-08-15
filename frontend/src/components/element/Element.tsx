import { CSSProperties, useState } from "react";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const [highlight, setHighlight] = useState(false);

  const styleExtension = {
    "--backgroundColor": highlight ? "red" : "rgba(128, 128, 128, 0.425)",
  } as CSSProperties;

  return (
    <div
      className={styles.element}
      style={styleExtension}
      onClick={() => setHighlight(true)}
    ></div>
  );
};
