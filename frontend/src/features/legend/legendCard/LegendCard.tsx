import { ReactNode } from "react";
import { repeat } from "../../../utils/repeat";
import { Tile } from "../../tile/Tile";
import { ILegendCardProps } from "./ILegendCardProps";
import styles from "./LegendCard.module.css";

export const LegendCard: React.FC<ILegendCardProps> = (props) => {
  const items = () => {
    const ship: ReactNode[] = [];
    repeat(props.ship.size, () => ship.push(<Tile color={props.ship.color}/>));
    return ship;
  };

  return (
    <div className={styles.legendCard}>
      <div className={styles.legendCardTitle}>
        {props.amount}x {props.ship.name}
      </div>
      <div className={styles.legendCardShip}>{items()}</div>
    </div>
  );
};
