import { Button } from "../../components/button/Button";
import styles from "./StartMenu.module.css";

export const StartMenu: React.FC = () => {
  return (
    <section className={styles.startMenu}>
      <div>
        <Button>Create Game</Button>
      </div>
      <Button>Join Game</Button>
      <Button>Setup</Button>
    </section>
  );
};
