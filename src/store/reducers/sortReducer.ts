import { SortAction } from "@store/actions/sortActions"
import { Reducer } from "redux"

export type SortState = {
  types: string[]
}

const initialState: SortState = {
  types: []
};

const sortReducer: Reducer<SortState, SortAction> = (state = initialState, action) => {
  switch (action.type) {
    case "sort/add": 
      return { 
        ...state, 
        types: [
          ...state.types,
          action.payload.type
        ]
      };
    case "sort/remove": 
      return {
        ...state,
        types: [
          ...state.types.filter(type => type !== action.payload.type)
        ]
      }
    case "sort/fetch": 
      return {
        ...state, 
        types: action.payload.types
      }
    case "sort/clear":
      return { types: [] };
    default: 
      return state;
  }
}

export default sortReducer;