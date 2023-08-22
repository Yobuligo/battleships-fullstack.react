import { useShips } from "../../../hooks/useShips";
import { LegendCard } from "../legendCard/LegendCard";
import { ILegendListProps } from "./ILegendListProps";
import styles from "./LegendList.module.css";

export const LegendList: React.FC<ILegendListProps> = (props) => {
  const ships = useShips();
  const items = ships.map((ship) => (
    <div key={ship.id} className={styles.legendListShip}>
      <LegendCard ship={ship} />
    </div>
  ));

  return <div className={styles.legendList}>{items}</div>;
};
