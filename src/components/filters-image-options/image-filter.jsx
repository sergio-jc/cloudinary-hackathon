import { parseToFilterUrl } from '@/utils/parse-to-filter-url'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'

export function ImageFilter({ filter, image }) {
  const {
    user,
    updateUserImage,
    removeImage,
    clearUserData,
    updateUserInfo,
    updateFiletImage
  } = useContext(userData)

  const handleFilterImage = () => {
    updateFiletImage({
      url: image
    })
  }
  return (
    <div
      className='w-16 h-16 overflow-hidden rounded-md'
      onClick={handleFilterImage}
    >
      <img
        className='w-full h-full object-cover hover:scale-125 transition-transform'
        src={image}
        alt='filter_image'
      />
    </div>
  )
}
