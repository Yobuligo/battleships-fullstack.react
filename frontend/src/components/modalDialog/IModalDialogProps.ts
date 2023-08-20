import { ReactNode } from "react";

export interface IModalDialogProps {
  children: ReactNode;
  onClose: () => void;
  title?: string;
}
