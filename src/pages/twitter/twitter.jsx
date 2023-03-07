import { Button } from '@components/button'
import { Icons } from '@components/icons'
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
          <div className='w-96 h-20 bg-stone-700' />
          <img
            className='absolute left-6 top-7 w-24 h-24 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
          <div className='absolute flex gap-2 -bottom-11 right-2'>
            <div className='h-8 w-8 bg-stone-800 border-[1px] border-stone-400 rounded-full px-1 pointer-events-none'>
              <Button textColor='#A8A29E' icon={<Icons.TwitterEllipsis />} />
            </div>
            <div className='h-8 w-8 bg-stone-800 border-[1px] border-stone-400 rounded-full px-1 pointer-events-none'>
              <Button textColor='#A8A29E' icon={<Icons.TwitterMessage />} />
            </div>
            <div className='h-8 w-8 bg-stone-800 border-[1px] border-stone-400 rounded-full px-1 pointer-events-none'>
              <Button textColor='#A8A29E' icon={<Icons.TwitterBell />} />
            </div>
            <div className='h-8 bg-stone-800 border-[1px] border-stone-400 rounded-full px-1 pointer-events-none'>
              <Button textColor='#A8A29E' title='Follow' />
            </div>
          </div>
        </header>
        <article className='pt-14 w-full px-5 flex flex-col gap-2'>
          <div>
            <div className='flex gap-1 w-full items-center'>
              <h3 className='text-stone-300 font-bold text-xl'>
                {user[USER_DATA.NAME] || 'Your name'}
              </h3>
              <picture className='scale-75'>
                <Icons.TwitterVerify />
              </picture>
            </div>
            <h4 className='text-stone-500 text-base'>
              @{user[USER_DATA.NICK_NAME] || 'nick_name'}
            </h4>
          </div>
          <p
            className='text-stone-300 text-sm overflow-scroll overflow-x-hidden h-20 pr-1'
            style={{ wordWrap: 'break-word' }}
          >
            {user[USER_DATA.DESCRIPTION] || 'Write a short description that reflects who you are and what you do, remember that your description is important. ⭐️'}
          </p>
        </article>
        <footer className='flex gap-3 text-sm text-stone-600 w-full px-5 mt-3'>
          <p>
            <strong>796</strong> Following
          </p>
          <p>
            <strong>179K</strong> Followers
          </p>
        </footer>
      </div>
      <div className='bg-stone-800 w-96 min-w-md h-96 flex flex-col items-center rounded-xl'>
        <article className='w-full px-2 py-4 flex gap-1'>
          <img
            className='w-16 h-16 rounded-full object-cover border-4 border-stone-800'
            src={user[USER_DATA.FILTER_IMAGE] || user[USER_DATA.IMAGE]}
          />
          <div className='flex flex-col gap-3 h-72'>
            <div className='flex items-center'>
              <h3 className='text-stone-300 font-bold text-sm'>
                {user[USER_DATA.NAME] || 'Your name'}
              </h3>
              <picture className='scale-50'>
                <Icons.TwitterVerify />
              </picture>
              <h4 className='text-stone-500 text-sm'>
                @{user[USER_DATA.NICK_NAME] || 'nick_name'}
              </h4>
            </div>
            <div className='h-96 min-w-full pr-2 flex flex-col justify-between'>
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
              <div className='w-72 h-32 bg-stone-700 rounded-lg mt-4' />
            </div>
            <div className='flex text-stone-500 text-sm justify-around mt-3'>
              <div className='flex items-center gap-1 scale-90'>
                <Icons.TwitterComments />
                <p>45</p>
              </div>
              <div className='flex items-center gap-1 scale-90'>
                <Icons.TwitterRetweet />
                <p>179</p>
              </div>
              <div className='flex items-center gap-1 scale-90'>
                <Icons.TwitterLike />
                <p>1,782</p>
              </div>
              <div className='flex items-center gap-1 scale-90'>
                <Icons.TwitterChart />
                <p>221,3k</p>
              </div>
              <div className='scale-75'>
                <Icons.TwitterUpLoad />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
