import { useState } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { MainPage } from "./pages/MainPage";

function App() {
  const numberElementsX = 10;
  const numberElementsY = 10;
  const [selectedColor, setSelectedColor] = useState("#FF0000");

  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        grid: useGrid(numberElementsX, numberElementsY),
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
