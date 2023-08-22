import { useState } from "react";
import { LoginApi } from "../../../api/LoginApi";
import { UnknownUserError } from "../../../api/UnknownUserError";
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

  const onLogin = async () => {
    try {
      await LoginApi.login({ username, password });
    } catch (error) {
      if (error instanceof UnknownUserError) {
        messageDialog.show(
          t.login.incorrectCredentialsTitle,
          t.login.incorrectCredentialsDetails,
          <Button>{t.login.createAccount}</Button>
        );
      } else {
        messageDialog.show(
          t.login.unknownErrorTitle,
          t.login.unknownErrorDetails
        );
      }
    }
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
