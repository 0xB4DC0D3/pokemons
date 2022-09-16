import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

export function createMockStore(initialState: Partial<RootState>) {
  return createStore(rootReducer, {
    ...initialState
  }, applyMiddleware(thunk));
}