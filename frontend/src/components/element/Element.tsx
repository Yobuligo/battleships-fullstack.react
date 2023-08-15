import { CSSProperties, useContext, useState } from "react";
import { ElementRepository } from "../../api/ElementRepository";
import { AppContext } from "../../context/AppContext";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(AppContext);
  const [highlight, setHighlight] = useState(false);

  const styleExtension = {
    "--backgroundColor": highlight
      ? context.color
      : "rgba(128, 128, 128, 0.425)",
  } as CSSProperties;

  return (
    <div
      className={styles.element}
      style={styleExtension}
      onClick={() => {
        setHighlight(true);
        ElementRepository.add({
          color: context.color,
          posX: props.posX,
          posY: props.posY,
        });
      }}
    ></div>
  );
};
