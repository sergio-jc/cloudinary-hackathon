import { userData } from '@context/user-data'
import { useContext } from 'react'

export function Input({ label, property }) {
  const { updateUserInfo, user } = useContext(userData)
  const handleChangeValue = (e) => {
    console.log(e.target.value)
    const data = { property, value: e.target.value }
    console.log(data)
    updateUserInfo(data)
  }
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor='' className='text-stone-400 text-sm'>
        {label}
      </label>
      <input
        value={user[property]}
        onChange={handleChangeValue}
        className='text-sm rounded-lg block w-full pl-3 p-2.5  bg-stone-700 dark:border-gray-600
          placeholder-stone-400 text-stone-200 focus:outline-none'
      />
    </div>
  )
}
