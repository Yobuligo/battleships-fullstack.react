import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { useTranslation } from "../../hooks/useTranslation";

export const User: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LabeledInput label={t.username} />
      <LabeledInput label={t.color} type="color" />
    </>
  );
};
