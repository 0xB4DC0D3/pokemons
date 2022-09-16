import { PaginationAction } from "@store/actions/paginationActions"
import { Reducer } from "redux"

export type PaginationState = {
  next: string | null;
  previous: string | null;
}

const initialState: PaginationState = {
  next: null,
  previous: null,
};

const paginationReducer: Reducer<PaginationState, PaginationAction> = (state = initialState, action) => {
  switch (action.type) {
    case "pagination/setPagination": 
      return { ...state, ...action.payload };
    case "pagination/fetchNext":
      return state;
    case "pagination/fetchPrevious":
      return state;
    default: 
      return state;
  }
}

export default paginationReducer;