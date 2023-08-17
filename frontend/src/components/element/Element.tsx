import { CSSProperties, useContext } from "react";
import { ElementRepository } from "../../api/ElementRepository";
import { AppContext } from "../../context/AppContext";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(AppContext);

  const styleExtension = {
    "--backgroundColor": context.grid.findAt(props.coordinate)?.color,
  } as CSSProperties;

  return (
    <div
      className={styles.element}
      style={styleExtension}
      onClick={() => {
        context.grid.updateAt(props.coordinate, context.userColor);
        ElementRepository.add({
          color: context.userColor,
          posX: props.coordinate.posX,
          posY: props.coordinate.posY,
        });
      }}
    ></div>
  );
};
