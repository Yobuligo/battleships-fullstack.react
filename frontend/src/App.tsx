import { useState } from "react";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { MainPage } from "./pages/MainPage";

function App() {
  const [color, setColor] = useState("#FF0000");
  return (
    <AppContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      <MainPage />
    </AppContext.Provider>
  );
}

export default App;
