import type { FC } from "react";
import type { PokemonSmallCardProps } from "./types";
import PokemonSmallCardView from "./view";

const PokemonSmallCard: FC<PokemonSmallCardProps> = (props) => (
  <PokemonSmallCardView {...props} />
);

export default PokemonSmallCard;
