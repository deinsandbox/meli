export const selectCategory = (category = []) => {
  const count = {}

  category.forEach((cat) => {
    count[cat] = (count[cat] || 0) + 1
  })

  const sortable = Object.entries(count).sort((a, z) => z[1] - a[1])

  return sortable.length ? sortable[0][0] : null
}
