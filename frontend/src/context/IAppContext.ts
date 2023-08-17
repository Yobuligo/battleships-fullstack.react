import { IElement } from "../shared/model/IElement";
import { IGridData } from "../types/IGridData";

export interface IAppContext {
  color: string;
  setColor: (color: string) => void;
  elements: IElement[];
  setElements: (elements: IElement[]) => void;
  grid: IGridData;
}
