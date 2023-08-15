import { IElement } from "../shared/model/IElement";

export interface IAppContext {
  color: string;
  setColor: (color: string) => void;
  elements: IElement[];
  setElements: (elements: IElement[]) => void;
}
