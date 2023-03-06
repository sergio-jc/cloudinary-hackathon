import { useContext } from 'react'
import { downloadImage } from '../context/download-image'
import { Outlet } from 'react-router-dom'
// import { SearchSocialNetworks } from '@components/search-social-networks'
import { ImageOptions } from '@components/image-options'
import { ChangeSocialNetwork } from '@components/navs'
import { SocialNetworkData } from '@components/social-network-data'
import { FiltersImageOptions } from '@components/filters-image-options/filters-image-options'
import { FooterPage } from '@components/index'

export function Root() {
  const { value } = useContext(downloadImage)
  console.log(value)
  return (
    <main className='flex flex-col gap-10'>
      <ChangeSocialNetwork />
      <div className='flex gap-6'>
        <section>
          <FiltersImageOptions />
        </section>
        <section className='flex  gap-3'>
          <Outlet />
        </section>
        <section className='flex gap-6'>
          <SocialNetworkData />
          <ImageOptions />
        </section>
      </div>
      <div className='flex justify-center'>
        <FooterPage />
      </div>
    </main>
  )
}
