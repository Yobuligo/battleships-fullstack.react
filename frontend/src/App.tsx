import { useMemo, useState } from "react";
import "./App.css";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import {
  AppContext,
  AppNumberElementsX,
  AppNumberElementsY,
} from "./context/AppContext";
import { useGrid } from "./hooks/useGrid";
import { useTranslation } from "./hooks/useTranslation";
import { IShip } from "./model/IShip";
import { MainPage } from "./pages/MainPage";
import { IModalDialogConfig } from "./types/IModalDialogConfig";

function App() {
  const { t } = useTranslation();
  const [selectedColor, setSelectedColor] = useState("#FF0000");
  const [modalDialogConfig, setModalDialogConfig] =
    useState<IModalDialogConfig>({ show: false });

  const ships: IShip[] = useMemo(() => {
    return [
      {
        color: "#BD0000",
        name: t.ship.aircraftCarrier,
        size: 5,
      },
      {
        color: "#DB9600",
        name: t.ship.battleship,
        size: 4,
      },
      {
        color: "#AACC00",
        name: t.ship.cruiser,
        size: 3,
      },
      {
        color: "#008F7E",
        name: t.ship.destroyer,
        size: 2,
      },
      {
        color: "#0091FF",
        name: t.ship.submarine,
        size: 1,
      },
    ];
  }, [
    t.ship.aircraftCarrier,
    t.ship.battleship,
    t.ship.cruiser,
    t.ship.destroyer,
    t.ship.submarine,
  ]);

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
      <MainPage />
    </AppContext.Provider>
  );
}

export default App;
