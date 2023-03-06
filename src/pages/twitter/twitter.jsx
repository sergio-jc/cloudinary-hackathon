import { TWITTER_DEFAULT_TWEET } from '@constants/twitter-page.constants'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'

export function TwitterPage() {
  const { user } = useContext(userData)
  return (
    <div className='w-96 min-w-md flex flex-col items-center rounded-xl gap-4'>
      <div className='bg-stone-800 w-96 max-w-md h-80 flex flex-col items-center rounded-xl overflow-hidden'>
        <header className='relative'>
          <div className='w-96 h-28 bg-stone-700' />
          <img
            className='absolute left-6 top-16 w-24 h-24 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
        </header>
        <article className='pt-14 w-full px-5 flex flex-col gap-2'>
          <div>
            <h3 className='text-stone-300 font-bold text-xl'>
              {user[USER_DATA.NAME] || 'Your name'}
            </h3>
            <h4 className='text-stone-500 text-base'>
              @{user[USER_DATA.NICK_NAME] || 'nick_name'}
            </h4>
          </div>
          <p className='text-stone-300 text-sm overflow-scroll overflow-x-hidden h-20 pr-1' style={{ wordWrap: 'break-word' }}>
            {user[USER_DATA.DESCRIPTION] || ''}
          </p>
        </article>
      </div>
      <div className='bg-stone-800 w-96 min-w-md h-96 flex flex-col items-center rounded-xl'>
        <article className='w-full px-2 py-4 flex gap-1'>
          <img
            className='w-16 h-16 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
          <div className='flex flex-col gap-3 h-72'>
            <div className='flex gap-1'>
              <h3 className='text-stone-300 font-bold text-sm'>
                {user[USER_DATA.NAME] || 'Your name'}
              </h3>
              <h4 className='text-stone-500 text-sm'>
                @{user[USER_DATA.NICK_NAME] || 'nick_name'}
              </h4>
            </div>
            <div className='h-96 overflow-scroll overflow-x-hidden pr-2 flex flex-col justify-between'>
              <p className='text-stone-400 text-sm'>
                <p>💡 What are you thinking about ?</p>
                <br />
                <p>
                  💙 What would Twitter be without ideas being able to be
                  expressed?
                </p>
                <br />
                <p>
                  🎁 Soon this space will be editable so that you also have a
                  preview of your future great ideas and thoughts.
                </p>
              </p>
              <div className='w-full h-32 max-h-max bg-stone-700 rounded-lg mt-3' />
            </div>
            {/* <div> Aqui vendrian los botones de rettwetear comentar like y mas para mejorar la interfaz</div> */}
          </div>
        </article>
      </div>
    </div>
  )
}
