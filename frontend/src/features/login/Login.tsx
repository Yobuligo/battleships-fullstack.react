import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { useTranslation } from "../../hooks/useTranslation";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LabeledInput label={t.login.username} />
      <LabeledInput label={t.login.password} />
    </>
  );
};
