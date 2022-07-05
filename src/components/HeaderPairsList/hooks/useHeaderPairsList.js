import { useDispatch, useSelector } from "react-redux"
import { setSelectAll } from "../../../store/slices/my-pairs"

export const useHeaderPairsList = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state.myPairs)
  const handleChangeSelectAll = ev => dispatch(setSelectAll({ checked: ev.target.checked }))

  return {
    filter,
    handleChangeSelectAll,
  }
}