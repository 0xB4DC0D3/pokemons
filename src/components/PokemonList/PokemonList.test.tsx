import { createMockStore } from "@store/index"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import PokemonList from "./PokemonList"

describe("PokemonList component", () => {
  test("PokemonList renders correctly pokémons", async () => {
    const store = createMockStore({
      pokemon: {
        error: null, 
        loading: false, 
        types: [],
        pokemons: [
          {
            id: 1,
            imageUrl: "",
            moves: [],
            name: "test", 
            stats: [], 
            types: []
          },
          {
            id: 2,
            imageUrl: "",
            moves: [],
            name: "test2", 
            stats: [], 
            types: []
          }
        ]
      }
    });

    render(
      <Provider store={store}>
        <PokemonList data={store.getState().pokemon.pokemons}/>
      </Provider>
    );

    expect(screen.getAllByRole("heading", {
      name: /test/i
    })[0]).toHaveClass("capitalize");
  });
});