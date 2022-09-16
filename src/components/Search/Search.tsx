import useActions from "@hooks/useActions"
import useAppSelector from "@hooks/useAppSelector"

export default function Search() {
  const { fetchPokemonByName, fetchPokemons, setInputValue, setPages } = useActions();
  const inputValue = useAppSelector(state => state.search.value);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  }
  
  const handleOnKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      if (inputValue) {
        fetchPokemonByName(inputValue.toLowerCase());
        setPages(null, null);
      } else { 
        fetchPokemons();
      }
    }
  }
  
  return (
    <div className="block w-5/6 sm:container mx-auto my-4">
      <label htmlFor="search" className="block text-sm font-semibold pb-2">Search pokémon</label>
      <input 
        type="text" 
        id="search" 
        value={inputValue}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
        placeholder="For example, Bulbasaur"
        onChange={handleChange}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  )
}