export function Button({ title, icon, color, textColor, onClick = () => {} }) {
  return (
    <button
      style={{
        backgroundColor: color ?? 'transparent',
        color: textColor ?? '#d6d1d3'
      }}
      className='rounded-lg flex items-center justify-center px-2 py-1 w-full hover:scale-110 transition-transform h-full'
      onClick={onClick}
    >
      {icon && <div className='scale-75'>{icon}</div>}
      {title && <h3 className='font-medium text-sm p-1'>{title}</h3>}
    </button>
  )
}
