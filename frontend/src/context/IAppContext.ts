import { ISession } from "../shared/model/ISession";
import { IGrid } from "../types/IGrid";
import { IModalDialogConfig } from "../types/IModalDialogConfig";
import { IValue } from "../types/IValue";

export interface IAppContext {
  selectedColor: IValue<string>;
  grid: IGrid;
  modalDialogConfig: IValue<IModalDialogConfig>;
  session: IValue<ISession | undefined>;
}
