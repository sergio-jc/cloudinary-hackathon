import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'

export function LinkedInPage() {
  const { user } = useContext(userData)
  return (
    <div className='w-96 min-w-md flex flex-col items-center rounded-xl gap-4'>
      <div className='bg-stone-800 w-96 max-w-md h-80 flex flex-col items-center rounded-xl overflow-hidden'>
        <header className='relative'>
          <div className='w-96 h-32 bg-stone-700' />
          <img
            className='absolute left-6 top-10 w-32 h-32 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
        </header>
        <article className='pt-12 w-full px-5'>
          <h3 className='text-stone-300 font-bold text-xl'>
            {user[USER_DATA.NAME] || 'Your name'}
          </h3>
          <h4
            className='text-stone-400 text-sm h-14 overflow-scroll overflow-x-hidden pr-1'
            style={{ wordWrap: 'break-word' }}
          >
            {user[USER_DATA.NICK_NAME] || 'nick_name'}
          </h4>
        </article>
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
