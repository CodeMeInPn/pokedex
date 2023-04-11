import type { FC } from "react";
import PokemonSmallCard from "../base/PokemonSmallCard";
import type { PokemonsListViewProps } from "./types";

const mock = Array(12).fill(0);

const PokemonsListView: FC<PokemonsListViewProps> = () => {
  return (
    <section className="px-3 pt-6 rounded-lg shadow-inner bg-white grid grid-cols-3 gap-2 place-content-center">
      {/* PokemonSmallCards component here */}
      {mock.map((item) => (
        <PokemonSmallCard key={item} />
      ))}
    </section>
  );
};

export default PokemonsListView;
