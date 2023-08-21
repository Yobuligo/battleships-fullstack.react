import { LegendCard } from "../legendCard/LegendCard";
import styles from "./LegendList.module.css";

export const LegendList: React.FC = () => {
  return (
    <div className={styles.legendList}>
      <div className={styles.legendListShip}>
        <LegendCard
          title="Aircraft Carrier"
          amount={1}
          numberElements={5}
          color="#000"
        />
      </div>
      <div className={styles.legendListShip}>
        <LegendCard
          title="Battleship"
          amount={2}
          numberElements={4}
          color="#000"
        />
      </div>
      <div className={styles.legendListShip}>
        <LegendCard
          title="Cruiser"
          amount={3}
          numberElements={3}
          color="#000"
        />
      </div>
      <div className={styles.legendListShip}>
        <LegendCard
          title="Destroyer"
          amount={4}
          numberElements={2}
          color="#000"
        />
      </div>
      <div className={styles.legendListShip}>
        <LegendCard
          title="Submarine"
          amount={4}
          numberElements={1}
          color="#000"
        />
      </div>
    </div>
  );
};
