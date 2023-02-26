import type { FC } from "react";
import type { PokemonSmallCardProps } from "./types";
import PokemonSmallCardView from "./view";

const PokemonSmallCard: FC<PokemonSmallCardProps> = () => (
  <PokemonSmallCardView />
);

export default PokemonSmallCard;
