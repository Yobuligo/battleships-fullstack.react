import { useContext } from "react";
import { ElementRepository } from "../../api/ElementRepository";
import { AppContext } from "../../context/AppContext";
import { request } from "../../utils/request";
import { Tile } from "../tile/Tile";
import { ICellProps } from "./ICellProps";

export const Cell: React.FC<ICellProps> = (props) => {
  const context = useContext(AppContext);
  const cell = context.grid.findAt(props.coordinate);

  return (
    <Tile
      color={cell?.color}
      onClick={() => {
        context.grid.updateAt(props.coordinate, context.selectedColor.value);
        request(async () => {
          try {
            await ElementRepository.add({
              color: context.selectedColor.value,
              posX: props.coordinate.posX,
              posY: props.coordinate.posY,
            });
          } catch (error) {
            if (error instanceof Error) {
              console.log(
                `Error while adding new Element to backend. ${error.message}`
              );
            }
          }
        });
      }}
    ></Tile>
  );
};
