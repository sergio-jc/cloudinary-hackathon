import { mergeStrings } from '@/utils/merge-strings'
import { Button } from '@components/button'
import { Icons } from '@components/icons'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext, useMemo } from 'react'

export function LinkedInPage() {
  const { user } = useContext(userData)
  const userHeaderData = user[USER_DATA.NAME] || 'Your name'
  const userNameHeader = useMemo(() => {
    return user[USER_DATA.NICK_NAME]
      ? mergeStrings({
          mainStr: userHeaderData,
          secondaryStr: user[USER_DATA.NICK_NAME]
        })
      : userHeaderData
  }, [user])
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
          <h3 className='text-stone-300 font-bold text-xl'>{userNameHeader}</h3>
          <h4
            className='text-stone-400 text-sm h-16 overflow-scroll overflow-x-hidden pr-1'
            style={{ wordWrap: 'break-word' }}
          >
            {user[USER_DATA.DESCRIPTION] ||
              'Write a short description that reflects who you are and what you do, remember that your description is important. ⭐️'}
          </h4>
        </article>
        <footer className='w-full mt-2 flex flex-col justify-start px-5 gap-1'>
          {/* <div className='flex'>
              <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
              <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
            </div> */}
          <div className='flex flex-col justify-start text-sm text-stone-600 w-full'>
            <div className='flex gap-4'>
              <p>
                <strong>+500</strong> Connections
              </p>
              <p>
                <strong>115.541</strong> Followers
              </p>
            </div>
            <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
              <div className='flex -space-x-3'>
                <div className='w-10 h-10  bg-stone-700 rounded-full border-4 border-stone-800' />
                <div className='w-10 h-10  bg-stone-700 rounded-full border-4 border-stone-800' />
              </div>
              <div className='w-36 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
            </div>
          </div>
          <div className='w-full flex justify-start gap-2'>
            <div className='h-7 bg-[#0d6993] rounded-full pointer-events-none'>
              <Button icon={<Icons.LinkedInConnect />} title='Connect' />
            </div>
            <div className='h-7 bg-[#0d6993] rounded-full pointer-events-none'>
              <Button
                icon={<Icons.LinkedInSendMessage />}
                title='Send message'
              />
            </div>
            <div className='border-[1px] border-stone-400 h-7 w-7 rounded-full pointer-events-none'>
              <Button icon={<Icons.TwitterEllipsis />} textColor='#A8A29E' />
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
              <div className='flex flex-col justify-between'>
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
              </div>
              <div className='flex flex-col justify-between'>
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
              </div>
              <div className='flex flex-col justify-between'>
                <div>
                  <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
                    <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                    <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                    <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  </div>
                  <div>
                    <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  </div>
                </div>
                <div>
                  <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
                    <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                    <div className='w-28 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  </div>

                  <div className='flex items-center gap-2 text-stone-500 text-sm font-semibold'>
                    <div className='w-full h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                    <div className='w-12 h-4  bg-stone-700 rounded-full border-4 border-stone-800' />
                  </div>
                </div>
              </div>
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
