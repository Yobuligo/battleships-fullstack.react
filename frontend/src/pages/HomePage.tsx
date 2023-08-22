import { Board } from "../features/board/Board";
import { useTranslation } from "../hooks/useTranslation";
import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.homePage}>
        <div>
          <Board title={t.ownShips} />
        </div>
        <div className={styles.boardPageLegendList}></div>
        <div>
          <Board title={t.enemyShips} />
        </div>
      </div>
    </>
  );
};
