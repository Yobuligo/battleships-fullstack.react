import { ReactNode } from "react";
import { repeat } from "../../utils/repeat";
import { Cell } from "../cell/Cell";
import styles from "./ElementRow.module.css";
import { IElementRowProps } from "./IElementRowProps";

export const ElementRow: React.FC<IElementRowProps> = (props) => {
  const items = () => {
    const items: ReactNode[] = [];

    repeat(props.numberElementsX, (index) => {
      items.push(
        <Cell key={index} coordinate={{ posX: index, posY: props.posY }} />
      );
    });

    return items;
  };
  return <div className={styles.elementRow}>{items()}</div>;
};
