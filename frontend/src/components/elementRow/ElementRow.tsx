import { ReactNode } from "react";
import { repeat } from "../../utils/repeat";
import { Element } from "../element/Element";
import styles from "./ElementRow.module.css";
import { IElementRowProps } from "./IElementRowProps";

export const ElementRow: React.FC<IElementRowProps> = (props) => {
  const items = () => {
    const items: ReactNode[] = [];
    repeat(props.numberElementsX, () => {
      items.push(<Element />);
    });
    return items;
  };
  return <div className={styles.elementRow}>{items()}</div>;
};
