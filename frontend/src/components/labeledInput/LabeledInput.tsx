import { useId, useState } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const inputId = useId();
  const [value, setValue] = useState(props.initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange?.(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor={inputId}>{props.label}</label>
      </div>
      <div>
        <input
          type={props.type ?? "text"}
          id={inputId}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
