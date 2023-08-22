import { ReactNode } from "react";

export interface IModalDialogProps {
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  title?: string;
  width?: number;
}
