import type { FC } from "react";
import PokemonSmallCard from "../base/PokemonSmallCard";
import type { PokemonsListViewProps } from "./types";

const PokemonsListView: FC<PokemonsListViewProps> = ({ pokemons }) => {
  return (
    <section className="px-3 pt-6 rounded-lg shadow-inner bg-white grid grid-cols-3 gap-2 place-content-center">
      {pokemons.map((pokemon) => (
        <PokemonSmallCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonsListView;
