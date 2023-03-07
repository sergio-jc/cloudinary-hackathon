import { Button } from '@components/button'
import { Icons } from '@components/icons'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'

export function LinkedInPage() {
  const { user } = useContext(userData)
  return (
    <div className='w-96 min-w-md flex flex-col items-center rounded-xl gap-4'>
      <div className='bg-stone-800 w-96 max-w-md h-80 flex flex-col items-center rounded-xl overflow-hidden'>
        <header className='relative'>
          <div className='w-96 h-20 bg-stone-700' />
          <img
            className='absolute left-6 top-1 w-28 h-28 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
          <picture className='text-stone-400 absolute right-20 -bottom-10'>
            <Icons.LinkedInPremiun />
          </picture>
          <picture className='text-stone-400 absolute right-8 -bottom-10'>
            <Icons.LikedInBell />
          </picture>
        </header>
        <article className='pt-10 w-full px-5'>
          <h3 className='text-stone-300 font-bold text-xl'>
            {user[USER_DATA.NAME] || 'Your name'}
          </h3>
          <h4
            className='text-stone-400 text-sm h-14 overflow-scroll overflow-x-hidden pr-1'
            style={{ wordWrap: 'break-word' }}
          >
            {user[USER_DATA.NICK_NAME] ||
              'Programación JavaScript y Desarrollo Web. Reconocido Google Developer Expert y GitHub Star. ⭐'}
          </h4>
        </article>
        <footer className='mt-3 w-full flex flex-col justify-start px-5 gap-2'>
          <div>
            <div className='flex'>
              <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
              <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
            </div>

            <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
              <div className='flex -space-x-3'>
                <div className='w-10 h-10  bg-stone-700 rounded-full border-4 border-stone-800' />
                <div className='w-10 h-10  bg-stone-700 rounded-full border-4 border-stone-800' />
              </div>
              <div className='w-48 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
            </div>
          </div>
          <div className='w-full flex justify-start gap-2'>
            <div className='h-8 bg-stone-700 rounded-full px-1'>
              <Button
                icon={<Icons.LinkedInConnect />}
                textColor='#292524'
                title='Connect'
              />
            </div>
            <div className='h-8 bg-stone-700 rounded-full px-1'>
              <Button
                icon={<Icons.LinkedInSendMessage />}
                textColor='#292524'
                title='Send message'
              />
            </div>
            <div className='border-2 h-8 w-8 border-stone-700 rounded-full'>
              <Button textColor='#57534E' title='...' />
            </div>
          </div>
        </footer>
      </div>
      <div className='bg-stone-800 w-96 min-w-md h-96 flex flex-col items-center rounded-xl'>
        <article className='w-full p-5 flex flex-col gap-4'>
          <h2 className='text-stone-300 font-bold text-base'>About</h2>
          <div
            className='min-w-md overflow-scroll h-72 overflow-x-hidden pr-2'
            style={{ wordWrap: 'break-word' }}
          >
            <p className='text-stone-400 text-sm'>
              {user[USER_DATA.DESCRIPTION] || ''}
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
