import { useState } from "react";
import { Button } from "../../../components/button/Button";
import { Dialog } from "../../../components/dialog/Dialog";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { useMessageDialog } from "../../../hooks/useMessageDialog";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./Login.module.css";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  const messageDialog = useMessageDialog();

  const onLogin = () => {
    messageDialog.show(
      t.login.incorrectCredentialsTitle,
      t.login.incorrectCredentialsDetails,
      <Button>{t.login.createAccount}</Button>
    );
  };

  const loginDisabled = username === "" || password === "";

  return (
    <Dialog
      title={t.login.title}
      footer={
        <Button disabled={loginDisabled} onClick={onLogin}>
          {t.login.title}
        </Button>
      }
    >
      <div>
        <LabeledInput
          label={t.login.username}
          onChange={(username) => setUsername(username)}
        />
      </div>
      <div className={styles.loginPassword}>
        <LabeledInput
          label={t.login.password}
          type="password"
          onChange={(password) => setPassword(password)}
        />
      </div>
    </Dialog>
  );
};
