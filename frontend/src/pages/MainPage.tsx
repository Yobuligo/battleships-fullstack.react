import { Field } from "../components/field/Field";
import { User } from "../features/user/User";
import styles from "./MainPage.module.css";

export const MainPage: React.FC = () => {
  return (
    <>
      <div className={styles.mainPageUser}>
        <User />
      </div>
      <Field numberElementsX={10} numberElementsY={10} />
    </>
  );
};
