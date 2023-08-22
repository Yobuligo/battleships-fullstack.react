import { useShips } from "../../../hooks/useShips";
import { LegendCard } from "../legendCard/LegendCard";
import { ILegendProps } from "./ILegendProps";
import styles from "./Legend.module.css";

export const Legend: React.FC<ILegendProps> = (props) => {
  const ships = useShips();
  const items = ships.map((ship) => (
    <div key={ship.id} className={styles.legendShip}>
      <LegendCard ship={ship} />
    </div>
  ));

  return <div className={styles.legend}>{items}</div>;
};
