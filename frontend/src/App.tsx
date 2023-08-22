import { useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import {
  AppContext,
  AppNumberElementsX,
  AppNumberElementsY,
} from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { HomePage } from "./pages/HomePage";
import { ISession } from "./shared/model/ISession";
import { IModalDialogConfig } from "./types/IModalDialogConfig";

function App() {
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [modalDialogConfig, setModalDialogConfig] =
    useState<IModalDialogConfig>({ show: false });
  const [session, setSession] = useState<ISession | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        grid: useGrid(AppNumberElementsX, AppNumberElementsY),
        modalDialogConfig,
        setModalDialogConfig,
        session,
        setSession,
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
      <HomePage />
    </AppContext.Provider>
  );
}

export default App;
