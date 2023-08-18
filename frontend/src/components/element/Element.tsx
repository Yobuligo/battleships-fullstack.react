import { CSSProperties, useContext } from "react";
import { ElementRepository } from "../../api/ElementRepository";
import { AppContext } from "../../context/AppContext";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(AppContext);
  const element = context.grid.findAt(props.coordinate);

  const styleExtension = {
    "--backgroundColor": element?.color,
  } as CSSProperties;

  return (
    <div
      className={styles.element}
      style={styleExtension}
      onClick={() => {
        context.grid.updateAt(props.coordinate, context.selectedColor);
        ElementRepository.add({
          color: context.selectedColor,
          posX: props.coordinate.posX,
          posY: props.coordinate.posY,
        });
      }}
    ></div>
  );
};
