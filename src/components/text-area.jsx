import { userData } from '@context/user-data'
import { useContext } from 'react'

export function Textarea({ label, property }) {
  const { updateUserInfo, user } = useContext(userData)
  const handleChangeValue = (e) => {
    console.log(e.target.value)
    const data = { property, value: e.target.value }
    console.log(data)
    updateUserInfo(data)
  }
  return (
    <div className='flex flex-col gap-2 h-full w-full'>
      <label htmlFor='' className='text-stone-400 text-sm'>
        {label}
      </label>
      <textarea
        onChange={handleChangeValue}
        value={user[property]}
        className='text-sm rounded-lg block w-full h-full  pl-3 p-2.5  bg-stone-700 dark:border-gray-600
          placeholder-stone-400 text-stone-200 focus:outline-none'
      />
    </div>
  )
}
