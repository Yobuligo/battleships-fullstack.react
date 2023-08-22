import { useContext, useState } from "react";
import { AccountApi } from "../../../api/account/AccountApi";
import { UnknownUserError } from "../../../api/account/UnknownUserError";
import { Button } from "../../../components/button/Button";
import { Dialog } from "../../../components/dialog/Dialog";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { AppContext } from "../../../context/AppContext";
import { useMessageDialog } from "../../../hooks/useMessageDialog";
import { useTranslation } from "../../../hooks/useTranslation";
import { ILoginProps } from "./ILoginProps";
import styles from "./Login.module.css";

export const Login: React.FC<ILoginProps> = (props) => {
  const context = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  const messageDialog = useMessageDialog();

  const onCreateAccount = async () => {
    try {
      const session = await AccountApi.createAccount({ username, password });
      props.onLogin?.(session);
      context.session.setValue(session);
    } catch (error) {
      messageDialog.show(
        t.login.createAccountErrorTitle,
        t.login.createAccountErrorDetails
      );
    }
  };

  const onLogin = async () => {
    try {
      const session = await AccountApi.login({ username, password });
      props.onLogin?.(session);
    } catch (error) {
      if (error instanceof UnknownUserError) {
        messageDialog.show(
          t.login.incorrectCredentialsTitle,
          t.login.incorrectCredentialsDetails,
          <Button onClick={onCreateAccount}>{t.login.createAccount}</Button>
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
