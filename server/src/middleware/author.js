export const author = (req, res, next) => {
  res.author = {
    name: 'Camilo',
    lastname: 'Martinez',
  }
  next()
}
