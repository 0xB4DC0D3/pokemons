type PokemonStats = {
  baseStat: number;
  effort: number;
  name: string;
}

type Pokemon = {
  id: number;
  name: string;
  imageUrl: string;
  moves: string[];
  stats: PokemonStats[];
  types: string[];
}

export default Pokemon;