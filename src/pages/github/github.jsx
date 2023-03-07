import { Icons } from '@components/icons'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext } from 'react'

export function GithubPage() {
  const { user } = useContext(userData)
  return (
    <div className='w-96 min-w-md flex flex-col items-center rounded-xl gap-4'>
      <div className='bg-stone-800 w-96 max-w-md h-80 p-3 flex flex-col rounded-xl overflow-hidden gap-2 px-5'>
        <header className='flex gap-3 items-center'>
          <img
            className='w-20 h-20 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
          <div>
            <h3 className='text-stone-300 text-xl font-semibold'>
              {user[USER_DATA.NAME] || 'Your name'}
            </h3>
            <h4 className='text-stone-400 text-lg'>
              {user[USER_DATA.NICK_NAME] || 'nickname'}
            </h4>
          </div>
        </header>
        <p
          className='text-stone-300 text-sm overflow-scroll h-20 overflow-x-hidden pr-1'
          style={{ wordWrap: 'break-word' }}
        >
          {user[USER_DATA.DESCRIPTION] ||
            'Write a short description that reflects who you are and what you do, remember that your description is important. ⭐️'}
        </p>
        <footer className='text-stone-400 flex flex-col gap-3'>
          <div className='flex items-center gap-1 text-sm text-stone-600 w-full'>
            <Icons.GithubUsers />
            <p>
              <strong className='text-stone-500'>796</strong> Following
            </p>
            <strong className='text-stone-500'>&#183;</strong>
            <p>
              <strong className='text-stone-500'>179K</strong> Followers
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='text-sm font-bold'>Achievements</h3>
            <div className='flex gap-1'>
              <img
                className='h-16 w-16'
                src='https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png'
                alt='pull_shark'
              />
              <img
                className='h-16 w-16'
                src='https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png'
                alt='quickdraw'
              />
              <img
                className='h-16 w-16'
                src='https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png'
                alt='yolo'
              />
            </div>
          </div>
        </footer>
      </div>
      <div className='bg-stone-800 w-96 min-w-md h-96 flex flex-col items-center rounded-xl'>
        <article className='w-full p-5 flex flex-col gap-4'>
          <h2 className='text-stone-300 font-medium text-base'>
            <code>
              {user[USER_DATA.NICK_NAME] || 'nickname'}/<strong>README</strong>
              .md
            </code>
          </h2>
          <div className='min-w-md overflow-scroll overflow-x-hidden h-72'>
            <div className='flex flex-col gap-1 items-center justify-between'>
              <img
                className='w-20 h-20 rounded-full object-cover border-4 border-stone-800'
                src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
              />
              <h3 className='text-stone-300 flex text-xl gap-2 font-semibold'>
                <p className='text-lg text-stone-400'> Hi 👋, I'm</p>
                <p>{user[USER_DATA.NAME] || 'Your name'}</p>
              </h3>
              <code className='text-stone-400 text-sm'>
                {user[USER_DATA.NICK_NAME] || 'Your nickname'}
              </code>
            </div>
            <div className='min-w-full pt-6 pr-2 flex flex-col justify-between'>
              <div>
                <div className='flex'>
                  <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>

                <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>
                <div>
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>
              </div>
              <div>
                <div className='flex'>
                  <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>

                <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>
                <div>
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>
                <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
                  <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
