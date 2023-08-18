import { useContext } from "react";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";

export const User: React.FC = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <>
      <LabeledInput label={t.username} />
      <LabeledInput
        label={t.color}
        type="color"
        initialValue={context.selectedColor}
        onChange={(color) => context.setSelectedColor(color)}
      />
    </>
  );
};
