import useActions from "@hooks/useActions"
import useAppSelector from "@hooks/useAppSelector"
import { shallowEqual } from "react-redux"

export default function Sort() {
  const { types } = useAppSelector(state => state.pokemon, shallowEqual);
  const sortTypes = useAppSelector(state => state.sort.types, shallowEqual);
  const { addType, removeType } = useActions();

  return (
    <div className="grid grid-cols-2 w-5/6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9 sm:container mx-auto gap-4">
      {types.map((type, i) => {
        const selected = sortTypes.some(sortedType => sortedType === type);

        return (
          <button 
            key={i}
            className={`block ${selected ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-100 hover:bg-gray-200"} font-medium text-center text-sm cursor-pointer py-2 px-10 border`}
            onClick={() => selected ? removeType(type) : addType(type)}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}