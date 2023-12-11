export const getDecimalPart = (num, decimals = 2) => {
  const numStr = num.toFixed(decimals).toString()
  let value = ''
  if (numStr.includes('.')) {
    value = numStr.split('.')[1]
  }

  return value
}

export const currencyFormat = (value, locales, currency, decimals) => {
  const formattedValue = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value)
  return formattedValue
}
