import axios from "axios"
import pokemonAPI, { PokeAPIEndpoints } from "@api/index"
import Pokemon from "@type/Pokemon"

type PokemonResult = {
  name: string;
  url: string;
}

type PokemonNamesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export async function fetchPokemonNames(
  limit = 10, 
  url: string | null = PokeAPIEndpoints.POKEMON as string
) {
  if (url == null) return null;

  let params = null;
  if (url === PokeAPIEndpoints.POKEMON) {
    params = { limit };
  }

  const response = await axios.get<PokemonNamesResponse>(url, { params });
  const { data } = response;

  return data;
}

type PokemonResponse = {
  name: string;
  moves: { 
    move: { 
      name: string; 
    }
  }[];
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    }
  }[];
  types: {
    type: {
      name: string;
    }
  }[]
}

export async function fetchPokemon(name: string): Promise<Pokemon> {
  const response = await pokemonAPI.get<PokemonResponse>(`pokemon/${name}`);
  const { data } = response;

  return {
    name: data.name,
    imageUrl: data.sprites.front_default,
    moves: data.moves.map(({move}) => move.name),
    stats: data.stats.map(stat => ({
      baseStat: stat.base_stat,
      effort: stat.effort,
      name: stat.stat.name
    })),
    types: data.types.map(({type: { name }}) => name)
  }
}
