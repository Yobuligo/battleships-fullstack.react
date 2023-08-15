import { ReactNode } from "react";
import { repeat } from "../../utils/repeat";
import { ElementRow } from "../elementRow/ElementRow";
import { IFieldProps } from "./IFieldProps";

export const Field: React.FC<IFieldProps> = (props) => {
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
