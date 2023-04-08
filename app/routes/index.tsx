import Header from "~/components/Header";
import PokemonsList from "~/components/PokemonsList";
import Searchbar from "~/components/Searchbar";

export async function action() {
  return null;
}

export default function Index() {
  return (
    <section className="m-1">
      <Header />
      <Searchbar />
      <PokemonsList />
    </section>
  );
}
