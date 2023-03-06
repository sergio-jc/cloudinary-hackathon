export function FooterPage() {
  return (
    <footer className='flex text-stone-400 gap-3 items-center p-2 hover:text-stone-300 transition-colors cursor-pointe w-80 justify-center'>
      <a
        href='https://www.linkedin.com/in/ronaldo-jara/'
        target='_blank'
        rel='noreferrer'
      >
        <p className='text-sm'>
          Made with 💜 by{' '}
          <strong>
            Ronaldo Jara <code>(sergio-jc)</code>
          </strong>
        </p>
      </a>
    </footer>
  )
}
