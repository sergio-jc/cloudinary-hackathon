import { parseToFilterUrl } from '@/utils/parse-to-filter-url'
import { ImageView } from '@components/image-options/image-view'
import { USER_DATA } from '@constants/user-data.constants'
import { userData } from '@context/user-data'
import { useContext, useMemo } from 'react'
import { Icons, Input, Textarea } from '..'
import { ImageFilter } from './image-filter'

export function FiltersImageOptions() {
  const { user, updateUserImage, removeImage, clearUserData, updateUserInfo } =
    useContext(userData)
  const filters = useMemo(() => {
    return [
      {
        filterName: 'Contrast',
        filterVariants: ['e_hue', 'e_hue:-30', 'e_hue:-40', 'e_hue:-60']
      },
      {
        filterName: 'Sepia',
        filterVariants: ['e_sepia', 'e_sepia:70', 'e_sepia:80', 'e_sepia:50']
      },
      {
        filterName: 'Saturation',
        filterVariants: [
          'e_saturation:100',
          'e_saturation:60',
          'e_saturation:-60',
          'e_saturation:-100'
        ]
      },
      {
        filterName: 'Opacity',
        filterVariants: ['o_80', 'o_70', 'o_60', 'o_50']
      },
      {
        filterName: 'Brightness',
        filterVariants: [
          'e_brightness',
          'e_brightness:30',
          'e_brightness:-20',
          'e_brightness:-40'
        ]
      },
      {
        filterName: 'Light',
        filterVariants: [
          'e_fill_light:40',
          'e_fill_light:90',
          'e_fill_light',
          'e_fill_light:50'
        ]
      }
    ]
  }, [])
  return (
    <section className='bg-stone-800 flex flex-col rounded-xl text-stone-400 p-5 justify-between gap-4'>
      {filters?.map(({ filterName, filterVariants }) => {
        return (
          <div key={`filter_${filterName}`} className='flex flex-col gap-4'>
            <h3 className='font-semibold text-sm'>{filterName}</h3>
            <div className='flex gap-3'>
              {filterVariants.map((filter) => (
                <ImageFilter
                  key={`filter_${filterName}_${filter}`}
                  filter={filter}
                  image={parseToFilterUrl({
                    url: user[USER_DATA.IMAGE],
                    filter
                  })}
                />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
