import { ReactNode } from "react";
import { repeat } from "../../utils/repeat";
import { ElementRow } from "../elementRow/ElementRow";
import { IBoardProps } from "./IBoardProps";

export const Board: React.FC<IBoardProps> = (props) => {
  const items = () => {
    const items: ReactNode[] = [];
    repeat(props.numberElementsY, (index) => {
      items.push(
        <ElementRow
          key={index}
          numberElementsX={props.numberElementsX}
          posY={index}
        />
      );
    });
    return items;
  };
  return <>{items()}</>;
};
