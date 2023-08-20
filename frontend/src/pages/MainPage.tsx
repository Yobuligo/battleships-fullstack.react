import { useContext } from "react";
import { ElementRepository } from "../api/ElementRepository";
import { Board } from "../components/board/Board";
import { AppContext } from "../context/AppContext";
import { MessageHandler } from "../features/message/MessageHandler";
import { User } from "../features/user/User";
import { useInitialize } from "../hooks/useInitialize";
import { useMessageHandler } from "../hooks/useMessageHandler";
import { checkNotNull } from "../utils/checkNotNull";
import { isNotNull } from "../utils/isNotNull";
import { IMainPageProps } from "./IMainPageProps";
import styles from "./MainPage.module.css";

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const context = useContext(AppContext);
  const message = useMessageHandler();

  const reload = async () => {
    const elements = await ElementRepository.findAll();
    context.grid.updateElements(elements.data);
  };

  const onPoll = () => {
    setTimeout(async () => {
      try {
        const isOutdated = await ElementRepository.isOutdated;
        if (isOutdated) {
          await reload();
        }
      } catch (error) {}

      onPoll();
    }, parseInt(process.env.REACT_APP_POLL_FREQUENCY!));
  };

  useInitialize(async () => {
    await reload();
    onPoll();
  });

  return (
    <>
      <div className={styles.mainPageHeader}>
        <div className={styles.mainPageUser}>
          <User />
        </div>
        <div>
          {isNotNull(context.message) && (
            <MessageHandler message={checkNotNull(context.message)} />
          )}
        </div>
      </div>
      <Board
        numberElementsX={props.numberElementsX}
        numberElementsY={props.numberElementsY}
      />
    </>
  );
};
