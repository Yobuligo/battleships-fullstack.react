import { IGrid } from "../types/IGrid";
import { IMessage } from "../types/IMessage";

export interface IAppContext {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  grid: IGrid;
  message: IMessage | undefined;
  setMessage: (message: IMessage | undefined) => void;
}
