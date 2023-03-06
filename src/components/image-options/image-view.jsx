import { userData } from '@context/user-data'
import { useContext } from 'react'

export function ImageView({ file, alt, update }) {
  const {
    user,
    updateUserImage,
    removeImage,
    clearUserData,
    updateUserInfo,
    clearFilterImage
  } = useContext(userData)
  const handleUpdateUserImage = () => {
    if (!update) return
    console.log(file, 'file')
    updateUserImage({ url: file })
    clearFilterImage()
  }
  return (
    <div
      className='w-40 h-40 bg-stone-800 rounded-lg'
      onClick={handleUpdateUserImage}
    >
      <img
        src={file}
        alt={alt}
        className='w-full h-full rounded-md object-cover hover:scale-110 transition hover:transition-transform hover:-rotate-2 hover:cursor-pointer'
      />
    </div>
  )
}
