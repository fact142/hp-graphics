import {ChangeEventHandler} from "react";

export type InputProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  min?: string,
  max?: string,
}