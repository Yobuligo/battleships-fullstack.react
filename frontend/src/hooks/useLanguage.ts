import { useState } from "react";
import { LanguageType } from "../types/LanguageType";

export const useLanguage = (): LanguageType => {
  const [language] = useState(LanguageType.EN);
  return language;
};
