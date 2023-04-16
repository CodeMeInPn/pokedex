import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import PokemonsList from "~/components/PokemonsList";
import Searchbar from "~/components/Searchbar";
import { LIMIT, OFFSET } from "~/utils/constants";
import { fetchData } from "~/utils/fetchData";

type LoaderData = {
  pokemons: Array<any>;
};

export async function action() {
  return null;
}

export async function loader() {
  const url = process.env.API_URL;
  if (!url) throw new Error("There's no API URL provided!");

  // TBD: PAGINATION
  const pokemons = await fetchData(`${url}?limit=${LIMIT}&offset=${OFFSET}`);

  return { pokemons };
}
export default function Index() {
  const { pokemons } = useLoaderData<LoaderData>();
  return (
    <section className="m-1">
      <Header />
      <Searchbar />
      <PokemonsList pokemons={pokemons} />
    </section>
  );
}
