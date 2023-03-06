import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'

export function GithubPage() {
  const { user } = useContext(userData)
  return (
    <div className='w-96 min-w-md flex flex-col items-center rounded-xl gap-4'>
      <div className='bg-stone-800 w-96 max-w-md h-80 p-3 flex flex-col rounded-xl overflow-hidden gap-2'>
        <header className='flex gap-3 items-center'>
          <img
            className='w-20 h-20 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
          <div>
            <h3 className='text-stone-300 text-xl font-semibold'>
              {user[USER_DATA.NAME] || 'Your name'}
            </h3>
            <h4 className='text-stone-400 text-lg'>sergio-jc</h4>
          </div>
        </header>
        <p
          className='text-stone-300 text-sm overflow-scroll h-20 overflow-x-hidden pr-1'
          style={{ wordWrap: 'break-word' }}
        >
          {user[USER_DATA.DESCRIPTION]}
        </p>
      </div>
      <div className='bg-stone-800 w-96 min-w-md h-96 flex flex-col items-center rounded-xl'>
        <article className='w-full p-5 flex flex-col gap-4'>
          <h2 className='text-stone-300 font-medium text-base'>
            <code>
              {user[USER_DATA.NICK_NAME] || 'Your name'}/<strong>README</strong>
              .md
            </code>
          </h2>
          <div className='min-w-md overflow-scroll overflow-x-hidden h-72'>
            <p className='text-stone-400 text-sm pr-2'>
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
          </div>
        </article>
      </div>
    </div>
  )
}
