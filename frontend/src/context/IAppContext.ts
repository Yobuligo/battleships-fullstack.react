import { ReactNode } from "react";
import { IGrid } from "../types/IGrid";

export interface IAppContext {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  grid: IGrid;
  showModalDialog: boolean;
  setShowModalDialog: (showModalDialog: boolean) => void;
  modalDialogComponent: ReactNode;
  setModalDialogComponent: (modalDialogComponent: ReactNode) => void;
}
