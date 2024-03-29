import {MouseEventHandler} from "react";

export type ButtonProps = {
  text: string
  onClick: MouseEventHandler<HTMLInputElement>
}