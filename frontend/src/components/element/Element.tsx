import { CSSProperties, useContext } from "react";
import { ElementRepository } from "../../api/ElementRepository";
import { AppContext } from "../../context/AppContext";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(AppContext);

  const styleExtension = {
    "--backgroundColor": context.grid.findAt(props.posX, props.posY)?.color,
  } as CSSProperties;

  return (
    <div
      className={styles.element}
      style={styleExtension}
      onClick={() => {
        context.grid.updateAt(props.posX, props.posY, context.userColor);
        ElementRepository.add({
          color: context.userColor,
          posX: props.posX,
          posY: props.posY,
        });
      }}
    ></div>
  );
};
