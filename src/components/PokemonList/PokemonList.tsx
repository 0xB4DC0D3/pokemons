import { Pokemon } from "@components"
import useAppSelector from "@hooks/useAppSelector"
import PokemonType from "@type/Pokemon"

type PokemonListProps = {
  data: PokemonType[];
}

export default function PokemonList({data}: PokemonListProps) {
  const sortTypes = useAppSelector(state => state.sort.types);

  return (
    <div className="w-5/6 sm:container mx-auto py-4">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 gap-4">
        {data
          .filter(pokemon => sortTypes.every(type => pokemon.types.includes(type)))
          .map(pokemon => <Pokemon key={pokemon.id} {...pokemon} />)
        }
      </div>
    </div>
  );
}