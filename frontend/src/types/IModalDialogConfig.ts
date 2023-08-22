import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode;
  footer?: ReactNode;
  show: boolean;
  title?: string;
  width?: number;
}
