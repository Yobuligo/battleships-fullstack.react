import { useTranslation } from "../../hooks/useTranslation";
import { Board } from "../board/Board";
import styles from "./Dashboard.module.css";
import { IDashboardProps } from "./IDashboardProps";

export const Dashboard: React.FC<IDashboardProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.dashboard}>
      <div>
        <Board title={t.ownShips} />
      </div>
      <div className={styles.dashboardInfo}>{props.children}</div>
      <div>
        <Board title={t.enemyShips} />
      </div>
    </div>
  );
};
