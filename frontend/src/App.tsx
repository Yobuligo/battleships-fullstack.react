import { useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { MainPage } from "./pages/MainPage";
import { IModalDialogConfig } from "./types/IModalDialogConfig";

function App() {
  const numberElementsX = 10;
  const numberElementsY = 10;
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [modalDialogConfig, setModalDialogConfig] =
    useState<IModalDialogConfig>({ show: false });

  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        gridNumberElementsX: numberElementsX,
        gridNumberElementsY: numberElementsY,
        grid: useGrid(numberElementsX, numberElementsY),
        modalDialogConfig,
        setModalDialogConfig,
      }}
    >
      {modalDialogConfig.show && (
        <ModalDialog
          onClose={() => {
            setModalDialogConfig({ show: false });
          }}
          title={modalDialogConfig.title}
          width={modalDialogConfig.width}
        >
          {modalDialogConfig.component}
        </ModalDialog>
      )}
      <MainPage
        numberElementsX={numberElementsX}
        numberElementsY={numberElementsY}
      />
    </AppContext.Provider>
  );
}

export default App;
