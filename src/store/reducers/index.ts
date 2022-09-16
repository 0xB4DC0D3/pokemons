import { combineReducers } from "redux"
import pokemonReducer, { PokemonState } from "./pokemonReducer"
import paginationReducer, { PaginationState } from "./paginationReducer"
import searchReducer, { SearchState } from "./searchReducer"
import sortReducer, { SortState } from "./sortReducer"

export { PokemonState, PaginationState, SearchState, SortState };

export default combineReducers({
  pokemon: pokemonReducer,
  pagination: paginationReducer,
  search: searchReducer,
  sort: sortReducer
});