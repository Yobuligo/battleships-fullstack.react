import { Board } from "../features/board/Board";
import { LegendList } from "../features/legend/legendList/LegendList";
import { useTranslation } from "../hooks/useTranslation";
import styles from "./BoardPage.module.css";
import { IBoardPageProps } from "./IBoardPageProps";

export const BoardPage: React.FC<IBoardPageProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.boardPage}>
      <div>
        <Board title={t.ownShips} />
      </div>
      <div className={styles.boardPageLegendList}>
        <LegendList ships={props.ships} />
      </div>
      <div>
        <Board title={t.enemyShips} />
      </div>
    </div>
  );
};
