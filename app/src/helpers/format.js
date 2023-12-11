export const currencyFormat = (value, locales, currency, decimals) => {
  const formattedValue = new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value)
  return formattedValue
}
