import { Button } from "../../components/button/Button";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { useTranslation } from "../../hooks/useTranslation";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LabeledInput label={t.login.username} />
      <LabeledInput label={t.login.password} />
      <div>
        <Button>Login</Button>
      </div>
      <div>
        Sign Up
      </div>
    </>
  );
};
