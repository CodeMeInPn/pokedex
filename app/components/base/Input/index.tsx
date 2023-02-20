import type { FC } from "react";
import type { InputProps } from "./types";
import InputView from "./view";

const Input: FC<InputProps> = (props) => <InputView {...props} />;
export default Input;
