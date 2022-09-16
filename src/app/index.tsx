import MainPage from "pages/MainPage"
import useActions from "@hooks/useActions"
import useAppSelector from "@hooks/useAppSelector"
import { shallowEqual } from "react-redux"
import { useEffect } from "react"

export default function App() {
  const { pokemons, error, loading } = useAppSelector(state => state.pokemon, shallowEqual);

  const { fetchPokemons } = useActions();

  useEffect(() => {
    fetchPokemons();
  }, []);  

  if (error) {
    return (
      <div className="flex justify-center items-center fixed h-screen w-screen">
        <h1 className="block font-bold text-3xl">{error} 😭</h1>
      </div>
    );
  }

  if (loading && !pokemons.length) {
    return (
      <div className="flex justify-center items-center fixed h-screen w-screen">
        <h1 className="block font-bold text-3xl">Loading... 😉</h1>
      </div>
    );
  }

  return (
    <MainPage pokemons={pokemons} />
  );
}