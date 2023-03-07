export function mergeStrings({ mainStr, secondaryStr }) {
  const aryStr = mainStr.split(' ').filter(Boolean)
  const initialStr = aryStr.slice(0, 2).join(' ')
  const lastStr = aryStr.slice(2, aryStr.length).join(' ')

  return `${initialStr} (${secondaryStr}) ${lastStr}`
}
