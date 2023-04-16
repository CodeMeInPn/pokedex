import type { FC } from "react";
import { getIdNumber } from "~/utils/getIdNumber";
import { capitalize } from "~/utils/capitalize";
import type { PokemonSmallCardViewProps } from "./types";

const PokemonSmallCardView: FC<PokemonSmallCardViewProps> = (props) => {
  const { id, name, sprites } = props;

  return (
    <article className="relative flex flex-col justify-between w-[104px] h-[108px] shadow-outer rounded overflow-hidden">
      <div className="flex justify-end">
        <p className="pt-1 px-2 text-[8px] text-gray-300">{getIdNumber(id)}</p>
      </div>
      <div className="absolute top-4 left-4">
        <div className="flex justify-center">
          <img
            src={sprites.front_default ? sprites.front_default : ""}
            alt={name}
            className="min-h-[72px] max-h-[72px]"
          />
        </div>
      </div>
      <div className="flex items-end justify-center h-11 bg-gray-100 rounded-t-[7px]">
        <p className="text-[10px] px-2 pb-1 text-gray-500">
          {capitalize(name)}
        </p>
      </div>
    </article>
  );
};
export default PokemonSmallCardView;
