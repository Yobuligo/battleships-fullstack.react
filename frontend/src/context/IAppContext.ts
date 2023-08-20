import { ReactNode } from "react";
import { IGrid } from "../types/IGrid";
import { IMessage } from "../types/IMessage";

export interface IAppContext {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  grid: IGrid;
  message: IMessage | undefined;
  setMessage: (message: IMessage | undefined) => void;
  showModalDialog: boolean;
  setShowModalDialog: (showModalDialog: boolean) => void;
  modalDialogComponent: ReactNode;
  setModalDialogComponent: (modalDialogComponent: ReactNode) => void;
}
