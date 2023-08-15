import { HTMLInputTypeAttribute } from "react";

export interface ILabeledInputProps {
  label: string;
  initialValue?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (newValue: string)=>void
}
