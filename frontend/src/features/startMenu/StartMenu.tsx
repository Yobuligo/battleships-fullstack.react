import { Button } from "../../components/button/Button";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./StartMenu.module.css";

export const StartMenu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.startMenu}>
      <Button>{t.startMenu.login}</Button>
      <Button>{t.startMenu.createGame}</Button>
      <Button>{t.startMenu.joinGame}</Button>
      <Button>{t.startMenu.setup}</Button>
    </section>
  );
};
