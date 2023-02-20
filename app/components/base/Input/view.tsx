import type { FC } from "react";
import classname from "classnames";
import type { InputViewProps } from "./types";

const InputView: FC<InputViewProps> = ({ placeholder, className }) => {
  const inputClassname = classname(`${className} relative`);
  return (
    <div className={inputClassname}>
      <input
        className="w-full text-[10px] py-1 px-4 border border-lightGray bg-white rounded-lg placeholder:text-center focus:placeholder:text-left outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputView;
