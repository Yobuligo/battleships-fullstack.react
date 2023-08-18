import { IElement } from "../shared/model/IElement";
import { ICoordinate } from "./ICoordinate";
import { IGridCellData } from "./IGridCellData";

export interface IGrid {
  findAt(coordinate: ICoordinate): IGridCellData | undefined;
  updateAt(coordinate: ICoordinate, color: string): void;
  updateElements(elements: IElement[]): void;
}
