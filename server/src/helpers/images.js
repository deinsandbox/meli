export const getImage = (thumbnail, secure_thumbnail, pictures) => {
  if (pictures.length > 0) {
    return pictures[0].secure_url
  }

  return secure_thumbnail ?? thumbnail
}
