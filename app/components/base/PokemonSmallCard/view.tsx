import type { FC } from "react";
import type { PokemonSmallCardViewProps } from "./types";

const PokemonSmallCardView: FC<PokemonSmallCardViewProps> = () => {
  return (
    <article className="min-w-[104px] border border-grass rounded overflow-hidden">
      <div className="flex justify-end">
        <p className="pt-1 px-2 text-[10px] text-grass"></p>
      </div>
      <div>
        <div className="flex justify-center">
          <img src={""} alt="" className="min-h-[72-px] max-h-[72px]" />
        </div>
      </div>
      <div className="flex justify-center bg-grass">
        <p className="text-[10px] px-2 py-1 bg-grass text-white"></p>
      </div>
    </article>
  );
};
export default PokemonSmallCardView;
