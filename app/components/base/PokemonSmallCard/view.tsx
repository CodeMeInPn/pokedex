import type { FC } from "react";
import type { PokemonSmallCardViewProps } from "./types";

const PokemonSmallCardView: FC<PokemonSmallCardViewProps> = ({ pokemon }) => {
  return (
    <article className="relative flex flex-col justify-between w-[104px] h-[108px] shadow-outer rounded overflow-hidden">
      <div className="flex justify-end">
        <p className="pt-1 px-2 text-[8px] text-gray-300">{pokemon.name}</p>
      </div>
      <div className="absolute top-4 left-4">
        <div className="flex justify-center">
          <img
            src="https://fastly.picsum.photos/id/966/72/72.jpg?hmac=lHuuv_hDVjmgQu0EORnVWp2d8ayetg9bOsn4uLBQNnY"
            alt=""
            className="min-h-[72-px] max-h-[72px]"
          />
        </div>
      </div>
      <div className="flex items-end justify-center h-11 bg-gray-100 rounded-t-[7px]">
        <p className="text-[10px] px-2 pb-1 text-gray-500">Bulba</p>
      </div>
    </article>
  );
};
export default PokemonSmallCardView;
