import { createMockStore } from "@store"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import Sort from "./Sort"

describe("Sort component", () => {
  test("Test active buttons", async () => {
    const store = createMockStore({
      pokemon: {
        error: null,
        loading: false,
        pokemons: [],
        types: ["normal", "fighting", "flying"]
      },
      sort: {
        types: ["normal", "fighting"]
      }
    });

    render(
      <Provider store={store}>
        <Sort />
      </Provider>
    );

    expect(screen.getByRole("button", { name: /flying/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /flying/i })).toHaveClass("bg-gray-100");

    await userEvent.click(screen.getByText(/flying/i));

    expect(screen.getByRole("button", { name: /flying/i })).toHaveClass("bg-orange-500");
    expect(store.getState().sort).toEqual({
      types: ["normal", "fighting", "flying"]
    });
  });
})