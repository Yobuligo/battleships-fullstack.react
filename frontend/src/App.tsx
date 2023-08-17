import { useEffect, useState } from "react";
import "./App.css";
import { ElementRepository } from "./api/ElementRepository";
import { AppContext } from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { MainPage } from "./pages/MainPage";
import { IElement } from "./shared/model/IElement";
import { request } from "./utils/request";

function App() {
  const [userColor, setUserColor] = useState("#FF0000");
  const [elements, setElements] = useState<IElement[]>([]);

  useEffect(() => {
    request(async () => {
      const elements = await ElementRepository.findAll();
      setElements(elements);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        userColor,
        setUserColor,
        elements,
        setElements,
        grid: useGrid(10, 10),
      }}
    >
      <MainPage />
    </AppContext.Provider>
  );
}

export default App;
