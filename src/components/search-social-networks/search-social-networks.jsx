import React, { useMemo } from 'react'
import { SearchBar } from '@components'
import { Icons } from '..'
import { Button } from '@components/button'

export function SearchSocialNetworks() {
  const socialNetworks = useMemo(
    () => [
      {
        title: 'Facebook',
        color: '#3b5998',
        icon: <Icons.Facebook />,
        id: 1
      },
      {
        title: 'Github',
        color: '#000',
        icon: <Icons.GitHub />,
        id: 2
      },
      {
        title: 'Instagram',
        color: '#bc2a8d',
        icon: <Icons.Instagram />,
        id: 3
      },
      {
        title: 'LinkedIn',
        color: '#0e76a8',
        icon: <Icons.LinkedIn />,
        id: 4
      },
      {
        title: 'Twitter',
        color: '#1d99ca',
        icon: <Icons.Twitter />,
        id: 5
      }
    ],
    []
  )

  return (
    <aside
      id='sidebar'
      className='flex flex-col justify-center items-center gap-6'
    >
      <h1 className='text-7xl text-white font-semibold tracking-tighter'>
        Social
        <span className='text-7xl font-semibold text-cyan-300'>view.</span>
      </h1>
      <div className='bg-stone-800 p-4 flex flex-col gap-6 items-center rounded-xl'>
        <SearchBar />
      </div>
      <div className='bg-stone-800 p-4 flex flex-col gap-6 items-center rounded-xl'>
        <nav>
          <ul className='flex flex-col gap-5'>
            {socialNetworks.map(({ id, ...socialNetwork }) => {
              console.log(socialNetwork)
              return (
                <li key={`social_change_page_${id}`}>
                  <a href='/contacts/1'>
                    <Button {...socialNetwork} />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
