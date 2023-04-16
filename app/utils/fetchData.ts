import type { RawPokemonData } from "~/types/types";

export const fetchPokemons = async (url: string) => {
  const rawData = await fetch(url);
  const data: RawPokemonData = await rawData.json();
  const pokemons = await Promise.all(
    data.results.map((pokemon) => fetch(pokemon.url).then((res) => res.json()))
  );
  return pokemons;
};
