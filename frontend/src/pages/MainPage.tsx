import { useContext, useEffect } from "react";
import { ElementRepository } from "../api/ElementRepository";
import { Field } from "../components/field/Field";
import { AppContext } from "../context/AppContext";
import { User } from "../features/user/User";
import { request } from "../utils/request";
import { IMainPageProps } from "./IMainPageProps";
import styles from "./MainPage.module.css";

export const MainPage: React.FC<IMainPageProps> = (props) => {
  const context = useContext(AppContext);

  useEffect(() => {
    request(async () => {
      const elements = await ElementRepository.findAll();
      context.grid.updateElements(elements);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
