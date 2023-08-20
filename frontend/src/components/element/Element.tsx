import { CSSProperties, useContext } from "react";
import { ElementRepository } from "../../api/ElementRepository";
import { AppContext } from "../../context/AppContext";
import { useMessageHandler } from "../../hooks/useMessageHandler";
import { request } from "../../utils/request";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(AppContext);
  const element = context.grid.findAt(props.coordinate);
  const messageHandler = useMessageHandler();

  const styleExtension = {
    "--backgroundColor": element?.color,
  } as CSSProperties;

  return (
    <div
      className={styles.element}
      style={styleExtension}
      onClick={() => {
        context.grid.updateAt(props.coordinate, context.selectedColor);
        request(async () => {
          try {
            await ElementRepository.add({
              color: context.selectedColor,
              posX: props.coordinate.posX,
              posY: props.coordinate.posY,
            });
          } catch (error) {
            if (error instanceof Error) {
              messageHandler.show(
                `Error while adding new Element to backend`,
                error.message
              );
            }
          }
        });
      }}
    ></div>
  );
};
