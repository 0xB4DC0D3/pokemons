export type SearchAction = {
  type: "search/setValue";
  payload: {
    value?: string;
  }
}

export function setInputValue(value?: string): SearchAction {
  return {
    type: "search/setValue",
    payload: {
      value
    }
  };
}