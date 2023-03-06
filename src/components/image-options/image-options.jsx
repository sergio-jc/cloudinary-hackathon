import { Button } from '@components/button'
import { DropZone } from '@components/drop-zone'
import { DEFAULT_URL_IMAGES } from '@constants/filter.constants'
import { Icons } from '..'
import { ImageView } from './image-view'

export function ImageOptions() {
  return (
    <aside
      id='sidebar'
      className='flex flex-col justify-center items-center gap-4'
    >
      {/* <h1 className='text-xl text-white font-semibold tracking-tighter'>
        Image Options
      </h1> */}
      <div className='bg-stone-800 flex flex-col gap-6 items-center rounded-xl'>
        <DropZone filename='image_1' />
      </div>
      <ImageView file={DEFAULT_URL_IMAGES[0]} update />
      <ImageView file={DEFAULT_URL_IMAGES[1]} update />
      <ImageView file={DEFAULT_URL_IMAGES[2]} update />
      {/* <div className='bg-stone-800 p-4 flex flex-col gap-6 items-center rounded-xl'></div> */}
    </aside>
  )
}
