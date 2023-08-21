import { useContext } from "react";
import { ElementRepository } from "../api/ElementRepository";
import { AppContext } from "../context/AppContext";
import { User } from "../features/user/User";
import { useInitialize } from "../hooks/useInitialize";
import { usePing } from "../hooks/usePing";
import { usePolling } from "../hooks/usePolling";
import { BoardPage } from "./BoardPage";
import { IMainPageProps } from "./IMainPageProps";
import styles from "./MainPage.module.css";

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const context = useContext(AppContext);
  usePing();
  const polling = usePolling(ElementRepository, () => reload());

  const reload = async () => {
    const elements = await ElementRepository.findAll();
    context.grid.updateElements(elements.data);
  };

  useInitialize(async () => {
    try {
      await reload();
      polling.onPoll();
    } catch (error) {
      if (error instanceof Error) {
        console.log(`Error during initial load of data. ${error.message}`);
      }
    }
  });

  return (
    <>
      <div className={styles.mainPageHeader}>
        <div className={styles.mainPageUser}>
          <User />
        </div>
      </div>
      <BoardPage ships={props.ships} />
    </>
  );
};
