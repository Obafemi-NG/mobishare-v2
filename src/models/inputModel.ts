import { ChangeEventHandler, RefObject } from "react";

export interface InputProps {
  inputName: string;
  inputLabel: string;
  requiredValue: boolean;
  readOnly?: boolean;
  inputType: string;
  inputRef?: RefObject<HTMLInputElement>;
  // value?: number;
}

export interface ExchangeInputProps {
  inputName: string;
  inputLabel: string;
  requiredValue: boolean;
  readOnly?: boolean;
  inputType: string;
  inputValue?: string | number;
  handleOnChange?: ChangeEventHandler<HTMLInputElement>;
}
