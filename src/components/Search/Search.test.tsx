import { createMockStore } from "@store"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import Search from "./Search"

describe("Search component", () => {
  test("Should work input value", async () => {
    const store = createMockStore({
      search: {
        value: ""
      },
    });

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    expect(screen.getByText(/Search pokémon/i)).toHaveTextContent("Search pokémon");
    expect(screen.getByRole("textbox")).toHaveValue("");

    await userEvent.type(screen.getByRole("textbox"), "Test{enter}");
    
    expect(store.getState().search).toEqual({
      value: "Test"
    });
  });
});