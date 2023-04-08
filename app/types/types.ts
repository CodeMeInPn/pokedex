export type IconProps = {
  className?: string;
};

export type RawPokemonData = {
  count: number;
  next: string;
  previous: string;
  results: PokemonList[];
};

export type PokemonList = {
  name: string;
  url: string;
};
