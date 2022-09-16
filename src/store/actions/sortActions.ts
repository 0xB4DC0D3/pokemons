type SortActionAdd = {
  type: "sort/add";
  payload: {
    type: string;
  }
}

type SortActionRemove = {
  type: "sort/remove";
  payload: {
    type: string;
  }
}

type SortActionFetch = {
  type: "sort/fetch";
  payload: {
    types: string[];
  }
}

type SortActionClear = {
  type: "sort/clear";
}

export type SortAction = SortActionAdd | SortActionRemove | SortActionFetch | SortActionClear

export function addType(type: string): SortActionAdd {
  return {
    type: "sort/add",
    payload: {
      type
    }
  }
}

export function removeType(type: string): SortActionRemove {
  return {
    type: "sort/remove",
    payload: {
      type
    }
  }
}

export function clearSort(): SortActionClear {
  return {
    "type": "sort/clear"
  };
}