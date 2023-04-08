import type { FC } from "react";
import PokeballIcon from "../icons/PokeballIcon";

const HeaderView: FC = () => {
  return (
    <section className="mx-3 mt-3 mb-2 flex justify-between items-center">
      <div className="mr-4 text-white">
        <PokeballIcon />
      </div>
      <div className="min-w-[236px] w-full font-bold text-2xl text-white">
        Pokédex
      </div>
    </section>
  );
};

export default HeaderView;
