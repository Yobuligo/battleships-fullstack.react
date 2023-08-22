import { useMemo } from "react";
import { IShip } from "../model/IShip";
import { useTranslation } from "./useTranslation";

export const useShips = () => {
  const { t } = useTranslation();
  const ships: IShip[] = useMemo(
    () => [
      {
        amount: 1,
        color: "#0091FF",
        id: 1,
        name: t.ship.aircraftCarrier,
        size: 5,
      },
      {
        amount: 2,
        color: "#0091FF",
        id: 2,
        name: t.ship.battleship,
        size: 4,
      },
      {
        amount: 3,
        color: "#0091FF",
        id: 3,
        name: t.ship.cruiser,
        size: 3,
      },
      {
        amount: 4,
        color: "#0091FF",
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
    ],
    [
      t.ship.aircraftCarrier,
      t.ship.battleship,
      t.ship.cruiser,
      t.ship.destroyer,
      t.ship.submarine,
    ]
  );

  return ships;
};
