import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import {
  AppContext,
  AppNumberElementsX,
  AppNumberElementsY,
} from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { useValue } from "./hooks/useValue";
import { HomePage } from "./pages/HomePage";
import { ISession } from "./shared/model/ISession";
import { IModalDialogConfig } from "./types/IModalDialogConfig";

function App() {
  const modalDialogConfig = useValue<IModalDialogConfig>({ show: false });

  return (
    <AppContext.Provider
      value={{
        selectedColor: useValue<string>("#FF0000"),
        grid: useGrid(AppNumberElementsX, AppNumberElementsY),
        modalDialogConfig,
        session: useValue<ISession | undefined>({
          id: 1,
          createdAt: new Date(),
          changedAt: new Date(),
          username: "Peter",
        }),
      }}
    >
      {modalDialogConfig.value.show && (
        <ModalDialog
          onClose={() => {
            modalDialogConfig.setValue({ show: false });
          }}
          title={modalDialogConfig.value.title}
          width={modalDialogConfig.value.width}
        >
          {modalDialogConfig.value.component}
        </ModalDialog>
      )}
      <HomePage />
    </AppContext.Provider>
  );
}

export default App;
