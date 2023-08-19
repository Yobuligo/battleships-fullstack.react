import { useContext } from "react";
import { ElementRepository } from "../api/ElementRepository";
import { Board } from "../components/board/Board";
import { AppContext } from "../context/AppContext";
import { User } from "../features/user/User";
import { useInitialize } from "../hooks/useInitialize";
import { IMainPageProps } from "./IMainPageProps";
import styles from "./MainPage.module.css";

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const context = useContext(AppContext);

  const reload = async () => {
    const elements = await ElementRepository.findAll();
    context.grid.updateElements(elements.data);
  };

  const onPoll = () => {
    setTimeout(async () => {
      const isOutdated = await ElementRepository.isOutdated;
      if (isOutdated) {
        await reload();
      }
      onPoll();
    }, parseInt(process.env.REACT_APP_POLL_FREQUENCY!));
  };

  useInitialize(async () => {
    await reload();
    onPoll();
  });

  return (
    <>
      <div className={styles.mainPageUser}>
        <User />
      </div>
      <Board
        numberElementsX={props.numberElementsX}
        numberElementsY={props.numberElementsY}
      />
    </>
  );
};
