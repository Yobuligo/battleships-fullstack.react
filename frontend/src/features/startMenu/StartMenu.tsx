import { Button } from "../../components/button/Button";
import { useSession } from "../../hooks/useSession";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./StartMenu.module.css";

export const StartMenu: React.FC = () => {
  const session = useSession();
  const { t } = useTranslation();

  return (
    <section className={styles.startMenu}>
      <Button disabled={session.isLoggedIn()}>{t.startMenu.login}</Button>
      <Button disabled={!session.isLoggedIn()}>{t.startMenu.createGame}</Button>
      <Button disabled={!session.isLoggedIn()}>{t.startMenu.joinGame}</Button>
      <Button disabled={!session.isLoggedIn()}>{t.startMenu.setup}</Button>
    </section>
  );
};
