import { useState } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { MainPage } from "./pages/MainPage";
import { IMessage } from "./types/IMessage";

function App() {
  const numberElementsX = 10;
  const numberElementsY = 10;
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [message, setMessage] = useState<IMessage>();

  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        grid: useGrid(numberElementsX, numberElementsY),
        message,
        setMessage,
      }}
    >
      <MainPage
        numberElementsX={numberElementsX}
        numberElementsY={numberElementsY}
      />
    </AppContext.Provider>
  );
}

export default App;
