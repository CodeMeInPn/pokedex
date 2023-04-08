import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import PokemonsList from "~/components/PokemonsList";
import Searchbar from "~/components/Searchbar";
import type { RawPokemonData } from "~/types/types";

type LoaderData = {
  pokemons: RawPokemonData;
};

export async function action() {
  return null;
}

export async function loader() {
  const rawData = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
  );
  const pokemons: RawPokemonData = await rawData.json();
  return { pokemons };
}
export default function Index() {
  const { pokemons } = useLoaderData<LoaderData>();
  console.log(pokemons);
  return (
    <section className="mx-4 my-6">
      <Header />
      <Searchbar />
      <PokemonsList />
    </section>
  );
}
