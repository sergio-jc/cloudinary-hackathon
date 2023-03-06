import { useEffect, useState } from 'react'

export function useLocalStorage({ nameStorage }) {
  const [localState, setLocalState] = useState(null)
  const saveLocalStorage = ({ value }) => {
    console.log(value , 'value->˝')
    setLocalState(value)
    window.localStorage.setItem(nameStorage, value)
  }
  const deleteLocalState = () => {
    setLocalState(null)
    window.localStorage.removeItem(nameStorage)
  }

  const updateLocalState = ({ value }) => {
    setLocalState(value)
    window.localStorage.setItem(nameStorage, value)
  }
  useEffect(() => {
    const urlFromLocalStorage = window.localStorage.getItem(nameStorage)
    if (urlFromLocalStorage) {
      setLocalState(urlFromLocalStorage)
    }
  }, [localState])
  return { localState, saveLocalStorage, deleteLocalState, updateLocalState }
}
