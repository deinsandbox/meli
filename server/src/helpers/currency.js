export const getDecimalPart = (num) => {
  const numStr = num.toString()
  let value = '0'
  if (numStr.startsWith('-')) {
    value = '-0'
  }
  if (numStr.includes('.')) {
    value += '.' + numStr.split('.')[1]
  }

  return Number(value)
}

export const getDecimalLength = (num) => {
  const numStr = num.toString()
  let length = 0
  if (numStr.includes('.')) {
    length = numStr.split('.')[1].length
  }

  return Number(length)
}
