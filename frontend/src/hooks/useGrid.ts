import { useCallback, useState } from "react";
import { ICoordinate } from "../types/ICoordinate";
import { IGrid } from "../types/IGrid";
import { IGridCellData } from "../types/IGridCellData";
import { IGridData } from "../types/IGridData";
import { IGridRowData } from "../types/IGridRowData";
import { useInitialize } from "./useInitialize";

export const useGrid = (
  numberElementsX: number,
  numberElementsY: number
): IGrid => {
  const [data, setData] = useState<IGridData>([]);

  const initializeGridData = useCallback((): IGridData => {
    const grid: IGridData = [];
    for (let y = 0; y < numberElementsY; y++) {
      const row: IGridRowData = [];
      grid.push(row);
      for (let x = 0; x < numberElementsX; x++) {
        row.push({ color: "rgba(128, 128, 128, 0.425)", posX: x, posY: y });
      }
    }
    return grid;
  }, [numberElementsX, numberElementsY]);

  useInitialize(() => {
    const data = initializeGridData();
    setData(data);
  });

  const findAt = (coordinate: ICoordinate): IGridCellData | undefined => {
    return data[coordinate.posX][coordinate.posY];
  };

  const updateAt = (coordinate: ICoordinate, color: string) => {
    setData((previous) => {
      const element = previous[coordinate.posX][coordinate.posY];
      if (!element) {
        throw new Error(
          `Error when updating grid cell at (${coordinate.posX},${coordinate.posY}). Element at position not found.`
        );
      }

      element.color = color;
      return previous;
    });
  };

  return { findAt, updateAt };
};
