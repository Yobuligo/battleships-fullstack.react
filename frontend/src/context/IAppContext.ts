import { IElement } from "../shared/model/IElement";
import { IGrid } from "../types/IGrid";

export interface IAppContext {
  userColor: string;
  setUserColor: (color: string) => void;
  elements: IElement[];
  setElements: (elements: IElement[]) => void;
  grid: IGrid;
}
