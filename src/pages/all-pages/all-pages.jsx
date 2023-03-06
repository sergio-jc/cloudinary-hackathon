import { FooterPage } from '@components/index'
import { ChangeSocialNetwork } from '@components/navs'
import { GithubPage } from '@pages/github'
import { LinkedInPage } from '@pages/linkedIn'
import { TwitterPage } from '@pages/twitter'

export function AllPages() {
  return (
    <main className='flex flex-col gap-10'>
      <ChangeSocialNetwork />
      <div className='flex gap-6'>
        <div className='border-r-2 pr-6 border-dashed border-stone-600'>
          <LinkedInPage />
        </div>
        <div className='border-r-2 pr-6 border-dashed border-stone-600'>
          <TwitterPage />
        </div>
        <GithubPage />
      </div>
      <div className='flex justify-center'>
        <FooterPage />
      </div>
    </main>
  )
}
