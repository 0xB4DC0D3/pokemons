import { PokemonInfoModal } from "@components"
import Pokemon from "@type/Pokemon"
import { useState } from "react"

type PokemonProps = Pokemon

export default function Pokemon(props: PokemonProps) {
  const [showPokemonInfo, setShowPokemonInfo] = useState<boolean>(false);

  const handlePokemonClick = () => setShowPokemonInfo(prev => !prev);
  const handleCloseModal = () => setShowPokemonInfo(false);

  return (
    <>
      <div 
        className="flex flex-col py-2 w-full cursor-pointer items-center border shadow-md rounded-lg hover:bg-gray-50" 
        onClick={handlePokemonClick}
      >
        <img className="block w-24 h-24" src={props.imageUrl} alt={props.name} />
        <h1 className="font-bold text-lg capitalize">{props.name}</h1>
      </div>
      {showPokemonInfo && <PokemonInfoModal {...props} onClose={handleCloseModal} />}
    </>
  );
}