import { SearchAction } from "@store/actions/searchActions"
import { Reducer } from "redux"

export type SearchState = {
  value?: string;
}

const initialState: SearchState = {
  value: ""
};

const searchReducer: Reducer<SearchState, SearchAction> = (state = initialState, action) => {
  switch (action.type) {
    case "search/setValue": 
      return { ...state, ...action.payload};
    default: 
      return state;
  }
}

export default searchReducer;