import { useCallback, useState } from "react";
import { IElement } from "../shared/model/IElement";
import { ICoordinate } from "../types/ICoordinate";
import { IGrid } from "../types/IGrid";
import { IGridCellData } from "../types/IGridCellData";
import { IGridData } from "../types/IGridData";
import { IGridRowData } from "../types/IGridRowData";
import { checkNotNull } from "../utils/checkNotNull";
import { useInitialize } from "./useInitialize";

export const useGrid = (
  numberElementsX: number,
  numberElementsY: number
): IGrid => {
  const [data, setData] = useState<IGridData>([]);

  const initializeGridData = useCallback((): IGridData => {
    const grid: IGridData = [];
    for (let x = 0; x < numberElementsX; x++) {
      const row: IGridRowData = [];
      grid.push(row);
      for (let y = 0; y < numberElementsY; y++) {
        row.push({ color: "rgba(128, 128, 128, 0.425)", posX: x, posY: y });
      }
    }
    return grid;
  }, [numberElementsX, numberElementsY]);

  useInitialize(() => {
    const data = initializeGridData();
    setData(data);
  });

  const findAt = useCallback(
    (coordinate: ICoordinate): IGridCellData | undefined => {
      return data[coordinate.posX][coordinate.posY];
    },
    [data]
  );

  const updateAt = useCallback((coordinate: ICoordinate, color: string) => {
    setData((previous) => {
      const gridCell = previous[coordinate.posX][coordinate.posY];
      checkNotNull(
        gridCell,
        `Error when updating grid cell at (${coordinate.posX},${coordinate.posY}). Element at position not found.`
      );
      gridCell.color = color;
      return { ...previous };
    });
  }, []);

  const updateElements = useCallback((elements: IElement[]) => {
    if (elements.length === 0) return;

    setData((previous) => {
      elements.forEach((element) => {
        const gridCell = previous[element.posX][element.posY];
        checkNotNull(
          gridCell,
          `Error when updating grid cell at (${element.posX},${element.posY}). Element at position not found.`
        ).color = element.color;
      });
      return { ...previous };
    });
  }, []);

  return { findAt, updateAt, updateElements };
};
