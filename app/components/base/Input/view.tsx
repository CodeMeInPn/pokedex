import type { FC } from "react";
import type { InputViewProps } from "./types";

const InputView: FC<InputViewProps> = ({
  placeholder,
  className,
  onFocus,
  onBlur,
  isActive,
}) => {
  return (
    <div className={className}>
      <input
        onBlur={onBlur}
        onFocus={onFocus}
        className={`w-full h-full text-[10px] py-1 pl-9 bg-white rounded-[16px] outline-none placeholder:text-gray-300 shadow-inner`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputView;
