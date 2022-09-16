import { Header, PokemonList, Search, Pagination, Sort } from "@components"
import PokemonType from "@type/Pokemon"
import React from "react"

type MainPageProps = {
  pokemons: PokemonType[];
}

export default React.memo(function MainPage({pokemons}: MainPageProps) {
  return (
    <>
      <Header />
      <Search />
      {pokemons.length != 0 && <Sort />}
      {!pokemons.length && 
        <div className="flex sm:container p-8 justify-center mx-auto">
          <h1 className="font-bold text-3xl">Pokémon not found 😢</h1>
        </div>
      }
      <PokemonList data={pokemons} />
      {pokemons.length != 0 && 
        <Pagination />
      }
    </>
  )
});