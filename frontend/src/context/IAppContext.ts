import { IGrid } from "../types/IGrid";

export interface IAppContext {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  grid: IGrid;
}
