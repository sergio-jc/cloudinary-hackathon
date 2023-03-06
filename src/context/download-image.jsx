import { createContext } from 'react'

export const downloadImage = createContext()

function ImageProvider({ children }) {
  return (
    <downloadImage.Provider value={{ value: 'hello from context' }}>
      {children}
    </downloadImage.Provider>
  )
}

export default ImageProvider
