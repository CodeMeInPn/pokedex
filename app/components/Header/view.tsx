import classNames from "classnames";
import type { FC } from "react";
import ArrowDown from "../icons/ArrowDown";
import PokeballIcon from "../icons/PokeballIcon";
import type { HeaderViewProps } from "./types";

const HeaderView: FC<HeaderViewProps> = ({ onClick, sortType }) => {
  const sortClassname = classNames("text-[8px] font-semibold leading-none");
  return (
    <section className="px-2 py-1 flex justify-between items-center">
      <div className="mr-4">
        <PokeballIcon />
      </div>
      <div className="min-w-[236px] w-full font-bold text-2xl">Pokédex</div>
      <div className="ml-2 flex items-center" onClick={onClick}>
        {sortType === "number" ? (
          <div className=" mr-[2px]">
            <span className=" text-[10px] font-[500]">#</span>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center mr-[5px]">
              <span className={sortClassname}>A</span>
              <span className={sortClassname}>Z</span>
            </div>
          </>
        )}
        <ArrowDown />
      </div>
    </section>
  );
};

export default HeaderView;
