import { IGrid } from "../types/IGrid";

export interface IAppContext {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  grid: IGrid;
  error: any | undefined;
  setError: (error: any) => void;
}
