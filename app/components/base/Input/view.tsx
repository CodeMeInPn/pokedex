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
        className={`w-full text-[10px] py-1 px-6 border border-lightGray bg-white rounded-lg outline-none placeholder:text-mediumGray transition-all ${
          isActive ? "placeholder:text-left" : "placeholder:text-center"
        }`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputView;
