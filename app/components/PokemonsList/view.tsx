import type { FC } from "react";
import type { PokemonsListViewProps } from "./types";

const PokemonsListView: FC<PokemonsListViewProps> = () => {
  return (
    <section className="grid grid-cols-3 gap-2 place-content-center">
      {/* PokemonSmallCards component here */}
    </section>
  );
};

export default PokemonsListView;
