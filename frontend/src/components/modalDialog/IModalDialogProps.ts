import { ReactNode } from "react";

export interface IModalDialogProps {
  children: ReactNode;
  footer?: (onClose: () => void) => ReactNode;
  onClose: () => void;
  title?: string;
  width?: number;
}
