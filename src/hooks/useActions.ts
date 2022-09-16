import * as actions from "@store/actions"
import { AppDispatch } from "@store"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

export default function useActions() {
  return bindActionCreators({ ...actions }, useDispatch<AppDispatch>());
}