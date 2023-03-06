import { Icons } from './icons'

export function SearchBar() {
  return (
    <form className='flex items-center'>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Icons.Search />
        </div>
        <input
          type='text'
          id='simple-search'
          className='text-sm rounded-lg block w-full pl-10 p-2.5  bg-stone-700 dark:border-gray-600
          placeholder-stone-400 text-stone-200 focus:outline-none'
          placeholder='LinkedIn, Instagram, ...'
          required
        />
      </div>
      <button
        type='submit'
        className='p-2 ml-2 text-sm font-medium text-white bg-stone-600 rounded-lg border border-stone-600
        transition-colors hover:bg-stone-700 focus:outline-none px-3'
      >
        Search
      </button>
    </form>
  )
}
