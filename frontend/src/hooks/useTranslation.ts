import * as translations from "../i18n/index";
import { LanguageType } from "../types/LanguageType";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const language = useLanguage();
  switch (language) {
    case LanguageType.DE: {
      return translations["de"];
    }
    default:
      return translations["en"];
  }
};
