import { AppDispatch } from "@store"
import { fetchPokemons } from "./pokemonActions"

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
  return async (dispatch: AppDispatch) => {
    if (nextUrl) 
      fetchPokemons(nextUrl)(dispatch);
  }
}

export function fetchPreviousPage(previousUrl: string | null) {
  return async (dispatch: AppDispatch) => {
    if (previousUrl)
      fetchPokemons(previousUrl)(dispatch);
  }
}