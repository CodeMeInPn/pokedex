import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isActive: boolean;
}
export interface InputViewProps extends InputProps {}
