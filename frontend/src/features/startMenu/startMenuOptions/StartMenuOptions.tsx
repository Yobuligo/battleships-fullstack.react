import { Button } from "../../../components/button/Button";
import { useSession } from "../../../hooks/useSession";
import { useTranslation } from "../../../hooks/useTranslation";
import { IStartMenuOptionsProps } from "./IStartMenuOptionsProps";
import styles from "./StartMenuOptions.module.css";

export const StartMenuOptions: React.FC<IStartMenuOptionsProps> = (props) => {
  const session = useSession();
  const { t } = useTranslation();

  return (
    <div className={styles.startMenuOptions}>
      <Button disabled={!session.isLoggedIn()} onClick={props.onCreateGame}>
        {t.startMenu.createGame}
      </Button>
      <Button disabled={!session.isLoggedIn()} onClick={props.onJoinGame}>
        {t.startMenu.joinGame}
      </Button>
      <Button disabled={!session.isLoggedIn()} onClick={props.onSetup}>
        {t.startMenu.setup}
      </Button>
      {session.isLoggedIn() && (
        <Button onClick={props.onLogout}>{t.startMenu.logout}</Button>
      )}
    </div>
  );
};
