import type { FC } from "react";
import type { PokemonsListProps } from "./types";
import PokemonsListView from "./view";

const PokemonsList: FC<PokemonsListProps> = (props) => (
  <PokemonsListView {...props} />
);

export default PokemonsList;
