import { Button } from "../../components/button/Button";
import styles from "./StartMenu.module.css";

export const StartMenu: React.FC = () => {
  return (
    <section className={styles.startMenu}>
      <Button>Create Game</Button>
      <Button>Join Game</Button>
      <Button>Setup</Button>
    </section>
  );
};
