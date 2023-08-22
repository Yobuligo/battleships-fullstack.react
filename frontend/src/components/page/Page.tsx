import { Title } from "../../features/title/Title";
import { IPageProps } from "./IPageProps";
import styles from "./Page.module.css";

export const Page: React.FC<IPageProps> = (props) => {
  return (
    <>
      <header className={styles.mainPageHeader}>
        <Title />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};
