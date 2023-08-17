import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IGrid } from "../types/IGrid";
import { IGridCellData } from "../types/IGridCellData";
import { IGridData } from "../types/IGridData";
import { IGridRowData } from "../types/IGridRowData";

export const useGrid = (
  numberElementsX: number,
  numberElementsY: number
): IGrid => {
  const context = useContext(AppContext);
  const [data, setData] = useState<IGridData>([]);

  const initializeData = useCallback((): IGridData => {
    const grid: IGridData = [];
    for (let y = 0; y < numberElementsY; y++) {
      const row: IGridRowData = [];
      grid.push(row);
      for (let x = 0; x < numberElementsX; x++) {
        row.push({ color: context.userColor, posX: x, posY: y });
      }
    }
    return grid;
  }, [context.userColor, numberElementsX, numberElementsY]);

  const findAt = (posX: number, posY: number): IGridCellData | undefined => {
    return data[posX][posY];
  };

  useEffect(() => {
    const data = initializeData();
    setData(data);
  }, [initializeData]);

  return { findAt };
};
