import { IGrid } from "../types/IGrid";
import { IModalDialogConfig } from "../types/IModalDialogConfig";

export interface IAppContext {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  gridNumberElementsX: number;
  gridNumberElementsY: number;
  grid: IGrid;
  modalDialogConfig: IModalDialogConfig;
  setModalDialogConfig: (modalDialogConfig: IModalDialogConfig) => void;
}
