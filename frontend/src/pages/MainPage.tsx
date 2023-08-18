import { useContext } from "react";
import { ElementRepository } from "../api/ElementRepository";
import { Field } from "../components/field/Field";
import { AppContext } from "../context/AppContext";
import { User } from "../features/user/User";
import { useInitialize } from "../hooks/useInitialize";
import { IMainPageProps } from "./IMainPageProps";
import styles from "./MainPage.module.css";

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const context = useContext(AppContext);

  const reload = async () => {
    const elements = await ElementRepository.findAll();
    context.grid.updateElements(elements);
  };

  const onPoll = () => {
    setTimeout(async () => {
      const isOutdated = await ElementRepository.isOutdated;
      if (isOutdated) {
        await reload();
      }
      onPoll();
    }, 500);
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
      <Field
        numberElementsX={props.numberElementsX}
        numberElementsY={props.numberElementsY}
      />
    </>
  );
};
