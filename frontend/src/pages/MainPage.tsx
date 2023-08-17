import { Field } from "../components/field/Field";
import { User } from "../features/user/User";
import { IMainPageProps } from "./IMainPageProps";
import styles from "./MainPage.module.css";

export const MainPage: React.FC<IMainPageProps> = (props) => {
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
