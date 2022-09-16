import { RootState } from "@store/index"
import { useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;