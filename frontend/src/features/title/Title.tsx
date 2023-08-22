import { useTranslation } from "../../hooks/useTranslation";

export const Title: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t.name}</h1>;
};
