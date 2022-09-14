import { fetchPokemon, fetchPokemonNames } from "./pokemonAPI"

describe("Test API", () => {
  test("fetchPokemonNames", async () => {
    let responseData = await fetchPokemonNames(10);
    expect(responseData?.results[0].name).toEqual("bulbasaur");

    responseData = await fetchPokemonNames(10, responseData?.next);
    expect(responseData?.results[0].name).toEqual("metapod");

    responseData = await fetchPokemonNames(10, responseData?.previous);
    expect(responseData?.results[0].name).toEqual("bulbasaur");

    responseData = await fetchPokemonNames(10, responseData?.previous);
    expect(responseData).toEqual(null);
  });

  test("fetchPokemon", async () => {
    let pokemon = await fetchPokemon("bulbasaur");

    expect(pokemon.name).toEqual("bulbasaur");
    expect(pokemon.imageUrl).toEqual("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
    expect(pokemon.moves[0]).toEqual("razor-wind");
    expect(pokemon.stats[0].name).toEqual("hp");
    expect(pokemon.types[0]).toEqual("grass");
  });
});