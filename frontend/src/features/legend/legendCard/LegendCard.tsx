import { ReactNode } from "react";
import { repeat } from "../../../utils/repeat";
import { Element } from "../../element/Element";
import { ILegendCardProps } from "./ILegendCardProps";
import styles from "./LegendCard.module.css";

export const LegendCard: React.FC<ILegendCardProps> = (props) => {
  const items = () => {
    const ship: ReactNode[] = [];
    repeat(props.numberElements, (index) => {
      ship.push(<Element coordinate={{ posX: index, posY: 0 }} />);
    });
    return ship;
  };

  return (
    <div className={styles.legendCard}>
      <div className={styles.legendCardTitle}>
        {props.amount}x {props.title}
      </div>
      <div className={styles.legendCardShip}>{items()}</div>
    </div>
  );
};
