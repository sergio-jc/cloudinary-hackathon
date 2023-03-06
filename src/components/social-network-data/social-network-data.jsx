import { Button } from '@components/button'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'
import { Icons, Input, Textarea } from '..'

export function SocialNetworkData() {
  const {
    user,
    updateUserImage,
    removeImage,
    clearUserData,
    updateUserInfo,
    clearFilterImage
  } = useContext(userData)

  return (
    <section className='bg-stone-800 flex flex-col items-center rounded-xl p-2 justify-between'>
      <header className='relative'>
        <div className='w-72 h-36 bg-stone-700 rounded-lg' />
        <img
          className='absolute left-20 top-16 w-32 h-32 rounded-full object-cover border-4 border-stone-800'
          src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
        />
      </header>
      <form className='flex flex-col w-full px-3 pt-3 gap-4'>
        <Input label='Name' property='name' />
        <Input label='Description or Nickname' property='nickName' />
        <div className='h-56'>
          <Textarea label='About me' property='description' />
        </div>
      </form>
      <div className='flex gap-3'>
        <Button
          icon={<Icons.Brush />}
          title='Clear'
          color='#1C1917'
          onClick={clearFilterImage}
        />
        <a
          href={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          target='_blank'
          download
          rel='noreferrer'
        >
          <Button icon={<Icons.Download />} title='Download' color='#1C1917' />
        </a>
      </div>

      <footer className='flex text-stone-400 gap-3 items-center p-2'>
        <p className='text-sm'>Power by</p>
        <Icons.Cloudinary />
      </footer>
    </section>
  )
}
