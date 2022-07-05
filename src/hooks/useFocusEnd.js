import { useEffect, useRef } from "react"

export const useFocusEnd = focus => {
  const inputRef = useRef()

  useEffect(() => {
    // Forma imperativa de colocar el cursor al final del input, buscar una mejor forma
    if (focus) {
      inputRef.current.focus()
      const value = inputRef.current.value
      inputRef.current.value += ' '
      inputRef.current.value = value.substring()
    }
  }, [focus])

  return { inputRef }
}