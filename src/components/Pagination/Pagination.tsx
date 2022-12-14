import useActions from "@hooks/useActions"
import useAppSelector from "@hooks/useAppSelector"
import { shallowEqual } from "react-redux"

export default function Pagination() {
  const { next: nextPage, previous: previousPage } = useAppSelector(state => state.pagination, shallowEqual);
  const { loading } = useAppSelector(state => state.pokemon, shallowEqual);

  const { fetchNextPage, fetchPreviousPage, clearSort } = useActions();

  const handleNextPage = () => {
    if (nextPage && !loading) {
      fetchNextPage(nextPage);
      clearSort();
    }
  }

  const handlePreviousPage = () => {
    if (previousPage && !loading) {
      fetchPreviousPage(previousPage);
      clearSort();
    }
  }

  return (
    <div className="flex sm:container justify-center mx-auto my-4">
      <button className="hover:bg-gray-100 w-40 font-medium text-center text-sm cursor-pointer inline-block rounded-tl-md rounded-bl-md bg-gray-50 border py-2 px-10" onClick={handlePreviousPage}>Previous</button>
      <button className="hover:bg-gray-100 w-40 font-medium text-center text-sm cursor-pointer inline-block rounded-tr-md rounded-br-md bg-gray-50 border py-2 px-10" onClick={handleNextPage}>Next</button>
    </div>
  );
}