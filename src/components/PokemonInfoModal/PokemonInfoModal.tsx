import Pokemon from "@type/Pokemon"
import React from "react"

type PokemonInfoModalProps = Pokemon & {
  onClose: () => void;
}

function CloseIcon({onClose}: {onClose: () => void}) {
  return (
    <svg 
      fill="#000000" 
      xmlns="http://www.w3.org/2000/svg"  
      viewBox="0 0 24 24" 
      width="24px" 
      height="24px"
      onClick={onClose}
      className="cursor-pointer"
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
    </svg>
  );
}

export default function PokemonInfoModal(props: PokemonInfoModalProps) {
  const handleClose: React.MouseEventHandler = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    } 
  }

  return (
    <div className="top-0 left-0 flex fixed items-center justify-center h-screen w-screen backdrop-blur-sm bg-opacity-25 bg-gray-600 z-10" onClick={handleClose}>
      <div className="flex flex-col relative w-64 sm:w-96 bg-white rounded-3xl overflow-hidden border shadow-2xl shadow-black">
        <div className="flex justify-between items-center border-b px-4 py-2 bg-gray-50">
          <h1 className="font-semibold text-base">Information about pokémon</h1>
          <CloseIcon onClose={props.onClose} />
        </div>
        <div className="flex flex-col px-4 py-2 capitalize">
          <img className="block mx-auto w-24 h-24" src={props.imageUrl} alt={props.name} />
          <p><span className="font-bold">Name:</span> {props.name}</p>
          <ul>
            {props.stats.length != 0 && <p><span className="font-bold">Stats:</span></p>}
            {props.stats.map(stat => (
              <li key={stat.name}><p>- {stat.name}: {stat.baseStat} (E: {stat.effort})</p></li>
            ))}
          </ul>
          <ul>
            {props.types.length != 0 && <p><span className="font-bold">Types:</span></p>}
            {props.types.map((type, i) => (
              <li key={i}><p>- {type}</p></li>
            ))}
          </ul>
          <p><span className="font-bold">Total moves:</span> {props.moves.length}</p>
        </div>
      </div>
    </div>
  );
}