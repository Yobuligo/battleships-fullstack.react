import { ReactNode, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { repeat } from "../../utils/repeat";
import { ElementRow } from "../elementRow/ElementRow";
import styles from "./Board.module.css";
import { IBoardProps } from "./IBoardProps";

export const Board: React.FC<IBoardProps> = (props) => {
  const context = useContext(AppContext);

  const items = () => {
    const items: ReactNode[] = [];
    repeat(context.gridNumberElementsY, (index) => {
      items.push(
        <ElementRow
          key={index}
          numberElementsX={context.gridNumberElementsX}
          posY={index}
        />
      );
    });
    return items;
  };
  return (
    <>
      <div className={styles.boardHeader}>
        <h2>{props.title}</h2>
      </div>
      <div>{items()}</div>
    </>
  );
};
