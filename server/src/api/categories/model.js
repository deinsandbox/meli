export const parseCategoriesModel = (data) => {
  const result = {
    path: [],
  }

  try {
    if (data?.path_from_root?.length === 0) {
      return result
    }

    result.path = data.path_from_root
  } catch (error) {
    console.error('Model Error => Categories: ', error)
  }

  return result
}
