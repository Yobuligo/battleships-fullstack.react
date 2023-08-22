import { Button } from "../../../components/button/Button";
import { Dialog } from "../../../components/dialog/Dialog";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { useMessageDialog } from "../../../hooks/useMessageDialog";
import { useTranslation } from "../../../hooks/useTranslation";
import styles from "./Login.module.css";

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const messageDialog = useMessageDialog();

  const onLogin = () => {
    messageDialog.show(
      "Incorrect username or password",
      "The entered username or password were incorrect. Retry or create a new account."
    );
  };

  return (
    <Dialog
      title={t.login.title}
      footer={<Button onClick={onLogin}>Login</Button>}
    >
      <div>
        <LabeledInput label={t.login.username} />
      </div>
      <div className={styles.loginPassword}>
        <LabeledInput label={t.login.password} type="password" />
      </div>
    </Dialog>
  );
};
