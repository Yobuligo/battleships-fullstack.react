import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode;
  footer?: (onClose: () => void) => ReactNode;
  show: boolean;
  title?: string;
  width?: number;
}
