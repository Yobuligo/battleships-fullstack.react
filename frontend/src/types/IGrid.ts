import { ICoordinate } from "./ICoordinate";
import { IGridCellData } from "./IGridCellData";

export interface IGrid {
  findAt(coordinate: ICoordinate): IGridCellData | undefined;
  updateAt(coordinate: ICoordinate, color: string): void;
}
