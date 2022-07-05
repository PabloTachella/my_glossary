import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../store/slices/my-pairs"

export const useFilter = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state.myPairs)

  const filters = ['Todos', 'Palabras', 'Oraciones']
  const changeFilter = option => dispatch(setFilter({ filter: option }))

  return { filters, changeFilter, filter }
}