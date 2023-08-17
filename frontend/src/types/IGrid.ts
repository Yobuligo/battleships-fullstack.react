import { IGridCellData } from "./IGridCellData";

export interface IGrid {
  findAt(posX: number, posY: number): IGridCellData | undefined;
}
