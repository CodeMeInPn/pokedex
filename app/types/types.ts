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

type NameUrl = {
  name: string;
  url: string;
};

type Ability = {
  ability: NameUrl;
  is_hidden: boolean;
  slot: number;
};

type Form = NameUrl;

type GameIndicies = {
  game_index: number;
  version: NameUrl;
};

type VersionDetails = {
  rarity: number;
  version: NameUrl;
};

type HeldItems = {
  item: NameUrl;
  version_details: VersionDetails[];
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: NameUrl;
};

type Moves = {
  move: NameUrl;
  version_group_details: VersionGroupDetails[];
  version_group: NameUrl;
};

export type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: NameUrl;
};

type Type = {
  slot: number;
  type: NameUrl;
};

export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  game_indicies: GameIndicies[];
  height: number;
  held_items: HeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_types: [];
  species: NameUrl;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};
