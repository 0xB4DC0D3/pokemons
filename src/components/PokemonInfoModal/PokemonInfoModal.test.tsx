import { PokemonInfoModal } from "@components"
import { render, screen, waitFor } from "@testing-library/react"

describe("PokemonListModal component", () => {
  test("", async () => {
    render(<PokemonInfoModal 
      id={1} 
      imageUrl="https://fakeurl.com/1.png" 
      moves={["1", "2", "3"]}
      name={"Pokemon"}
      stats={[{baseStat: 45, effort: 1, name: "Stat1"}]}
      types={["normal"]}
      onClose={() => {}}
    />);

    await waitFor(() => {
      expect(screen.getByText(/information about pokémon/i)).toHaveClass("font-semibold text-base");
    });
  });
});