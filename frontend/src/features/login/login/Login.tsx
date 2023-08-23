import { useState } from "react";
import { AccountApi } from "../../../api/account/AccountApi";
import { UnknownUserError } from "../../../api/account/UnknownUserError";
import { Button } from "../../../components/button/Button";
import { Dialog } from "../../../components/dialog/Dialog";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { useMessageDialog } from "../../../hooks/useMessageDialog";
import { useTranslation } from "../../../hooks/useTranslation";
import { ILoginProps } from "./ILoginProps";
import styles from "./Login.module.css";

export const Login: React.FC<ILoginProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();
  const messageDialog = useMessageDialog();

  const onCreateAccount = async (onClose: () => void) => {
    try {
      const session = await AccountApi.createAccount({ username, password });
      props.onLogin?.(session);
      onClose();
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
          (onClose) => (
            <Button onClick={() => onCreateAccount(onClose)}>
              {t.login.createAccount}
            </Button>
          )
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
        <div className={styles.loginFooter}>
          <div>Sign Up</div>
          <div>
            <Button disabled={loginDisabled} onClick={onLogin}>
              {t.login.title}
            </Button>
          </div>
        </div>
      }
    >
      <form onSubmit={(event) => event.preventDefault()}>
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
      </form>
    </Dialog>
  );
};
