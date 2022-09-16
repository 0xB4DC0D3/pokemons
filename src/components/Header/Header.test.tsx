import { render, screen } from "@testing-library/react";
import Header from "./Header"

describe("Header component", () => {
  test("Has 'Pokémons' title", () => {
    render(<Header />);
    expect(screen.getByText("Pokémons")).toBeTruthy();
  });
});