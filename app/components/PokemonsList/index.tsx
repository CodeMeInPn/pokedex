import type { FC } from "react";
import type { PokemonsListProps } from "./types";
import PokemonsListView from "./view";

const PokemonsList: FC<PokemonsListProps> = () => <PokemonsListView />;

export default PokemonsList;
