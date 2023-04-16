import type { Sprites } from "~/types/types";

export interface PokemonSmallCardProps {
  id: number;
  name: string;
  sprites: Sprites;
}
export interface PokemonSmallCardViewProps extends PokemonSmallCardProps {}
