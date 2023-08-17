import { useState } from "react";

export const useInitialize = (initializer: () => void) => {
  const [needsInitialization, setNeedsInitialization] = useState(true);
  if (needsInitialization) {
    setNeedsInitialization(false);
    initializer();
  }
};
