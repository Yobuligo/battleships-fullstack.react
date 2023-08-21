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
        amount: 1,
        color: "#BD0000",
        id: 1,
        name: t.ship.aircraftCarrier,
        size: 5,
      },
      {
        amount: 2,
        color: "#DB9600",
        id: 2,
        name: t.ship.battleship,
        size: 4,
      },
      {
        amount: 3,
        color: "#AACC00",
        id: 3,
        name: t.ship.cruiser,
        size: 3,
      },
      {
        amount: 4,
        color: "#008F7E",
        id: 4,
        name: t.ship.destroyer,
        size: 2,
      },
      {
        amount: 5,
        color: "#0091FF",
        id: 5,
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
      <MainPage ships={ships} />
    </AppContext.Provider>
  );
}

export default App;
