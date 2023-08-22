import { Button } from "../../components/button/Button";
import { Dialog } from "../../components/dialog/Dialog";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { useTranslation } from "../../hooks/useTranslation";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Dialog title={t.login.title} footer={<Button>Login</Button>}>
      <LabeledInput label={t.login.username} />
      <LabeledInput label={t.login.password} />
    </Dialog>
  );
};
