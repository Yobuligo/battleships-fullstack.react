import { useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import {
  AppContext,
  AppNumberElementsX,
  AppNumberElementsY,
} from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { GamePage } from "./pages/GamePage";
import { IModalDialogConfig } from "./types/IModalDialogConfig";

function App() {
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [modalDialogConfig, setModalDialogConfig] =
    useState<IModalDialogConfig>({ show: false });

  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        grid: useGrid(AppNumberElementsX, AppNumberElementsY),
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
      <GamePage />
    </AppContext.Provider>
  );
}

export default App;
