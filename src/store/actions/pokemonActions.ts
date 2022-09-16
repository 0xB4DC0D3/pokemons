import { fetchPokemon, fetchPokemonNames, fetchTypes } from "@api/pokemonAPI"
import { LIMIT_PER_PAGE } from "@constants/index"
import { AppDispatch, RootState } from "@store"
import Pokemon from "@type/Pokemon"
import { setPages } from "./paginationActions"

type PokemonActionFetch = {
  type: "pokemon/fetch",
  payload: {
    loading: true;
  }
}

type PokemonActionFetchSuccess = {
  type: "pokemon/fetchSuccess";
  payload: {
    pokemons: Pokemon[];
    loading: false;
    error: null;
    types: string[];
  };
}

type PokemonActionFetchError = {
  type: "pokemon/fetchError";
  payload: {
    error: string;
    loading: false;
  }
}

export type PokemonAction = 
  PokemonActionFetch | 
  PokemonActionFetchError | 
  PokemonActionFetchSuccess 

export function fetchPokemons(url?: string | null) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ 
        type: "pokemon/fetch", 
        payload: { loading: true } 
      });

      const responseData = await fetchPokemonNames(LIMIT_PER_PAGE, url);
      const pokemonTypes = await fetchTypes();
      
      if (responseData) {
        const pokemonNames = responseData.results.map(pokemonData => pokemonData.name);
        const pokemons = await Promise.all(pokemonNames.map(async pokemonName => {
          return await fetchPokemon(pokemonName);
        }));

        dispatch({ 
          type: "pokemon/fetchSuccess", 
          payload: {
            error: null,
            loading: false,
            pokemons,
            types: pokemonTypes
          }
        });

        dispatch(setPages(responseData.next, responseData.previous));
      } else {
        throw new Error("Something went wrong...");
      }
    } catch {
      dispatch({ 
        type: "pokemon/fetchError",
        payload: {
          loading: false,
          error: "Something went wrong..."
        }
      });
    }
  }
}

export function fetchPokemonByName(name: string) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      dispatch({
        type: "pokemon/fetch",
        payload: {
          loading: true
        }
      });

      const responseData = await fetchPokemon(name);

      dispatch({
        type: "pokemon/fetchSuccess",
        payload: {
          error: null,
          loading: false,
          pokemons: [responseData],
          types: getState().pokemon.types
        }
      })
    } catch (error) {
      dispatch({
        type: "pokemon/fetchSuccess",
        payload: {
          error: null,
          loading: false,
          pokemons: [],
          types: getState().pokemon.types
        }
      });
    }
  }
}