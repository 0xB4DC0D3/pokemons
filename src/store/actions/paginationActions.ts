import { RootState } from "@store"
import { ThunkDispatch } from "redux-thunk"
import { fetchPokemons, PokemonAction } from "./pokemonActions"

type PaginationActionSetPagination = {
  type: "pagination/setPagination";
  payload: {
    next: string | null;
    previous: string | null;
  }
}

type PaginationActionFetchNextPage = {
  type: "pagination/fetchNext";
}

type PaginationActionFetchPreviousPage = {
  type: "pagination/fetchPrevious";
}

export type PaginationAction = 
  PaginationActionSetPagination | 
  PaginationActionFetchNextPage | 
  PaginationActionFetchPreviousPage;

export function setPages(nextUrl: string | null, previousUrl: string | null): PaginationActionSetPagination {
  return {
    type: "pagination/setPagination", 
      payload: {
      next: nextUrl,
      previous: previousUrl
    }
  };
}

export function fetchNextPage(nextUrl: string | null) {
  return async (dispatch: ThunkDispatch<RootState, void, PokemonAction>) => {
    if (nextUrl) 
      dispatch(fetchPokemons(nextUrl));
  }
}

export function fetchPreviousPage(previousUrl: string | null) {
  return async (dispatch: ThunkDispatch<RootState, void, PokemonAction>) => {
    if (previousUrl)
      dispatch(fetchPokemons(previousUrl));
  }
}