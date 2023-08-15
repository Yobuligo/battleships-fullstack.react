import { useEffect, useState } from "react";
import "./App.css";
import { ElementRepository } from "./api/ElementRepository";
import { AppContext } from "./context/AppContext";
import { MainPage } from "./pages/MainPage";
import { IElement } from "./shared/model/IElement";
import { request } from "./utils/request";

function App() {
  const [color, setColor] = useState("#FF0000");
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
        color,
        setColor,
        elements,
        setElements,
      }}
    >
      <MainPage />
    </AppContext.Provider>
  );
}

export default App;
