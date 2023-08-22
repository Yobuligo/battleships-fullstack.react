import { ReactNode } from "react";

export interface IDialogProps {
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  title?: string;
  width?: number;
}
