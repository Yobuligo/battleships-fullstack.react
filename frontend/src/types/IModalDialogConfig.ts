import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode;
  show: boolean;
  title?: string;
  width?: number;
}
