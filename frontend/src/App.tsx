import { ReactNode, useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { MainPage } from "./pages/MainPage";

function App() {
  const numberElementsX = 10;
  const numberElementsY = 10;
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [showModalDialog, setShowModalDialog] = useState(false);
  const [modalDialogComponent, setModalDialogComponent] =
    useState<ReactNode>(null);

  return (
    <AppContext.Provider
      value={{
        selectedColor,
        setSelectedColor,
        grid: useGrid(numberElementsX, numberElementsY),
        showModalDialog,
        setModalDialogComponent,
        modalDialogComponent,
        setShowModalDialog,
      }}
    >
      {showModalDialog && (
        <ModalDialog
          onClose={() => {
            setShowModalDialog(false);
            setModalDialogComponent(null);
          }}
        >
          {modalDialogComponent}
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
