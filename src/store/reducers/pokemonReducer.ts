
import { PokemonAction } from "@store/actions/pokemonActions"
import Pokemon from "@type/Pokemon"
import { Reducer } from "redux"

export type PokemonState = {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
  types: string[];
}

const initialState: PokemonState = {
  pokemons: [],
  loading: false,
  error: null,
  types: []
};

const pokemonReducer: Reducer<PokemonState, PokemonAction> = (state = initialState, action) => {
  switch (action.type) {
    case "pokemon/fetch": 
      return { ...state, ...action.payload};
    case "pokemon/fetchSuccess": 
      return { ...state, ...action.payload};
    case "pokemon/fetchError":
      return { ...state, ...action.payload};
    default: 
      return state;
  }
}

export default pokemonReducer;