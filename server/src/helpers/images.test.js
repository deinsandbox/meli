import { getImage } from './images.js'

describe('getImage', () => {
  it('should return the secure_url of the first picture if pictures array is not empty', () => {
    const thumbnail = 'thumbnail'
    const secure_thumbnail = 'secure_thumbnail'
    const pictures = [{ secure_url: 'image1' }, { secure_url: 'image2' }, { secure_url: 'image3' }]
    const result = getImage(thumbnail, secure_thumbnail, pictures)
    expect(result).toEqual('image1')
  })

  it('should return the secure_thumbnail if pictures array is empty and secure_thumbnail is defined', () => {
    const thumbnail = 'thumbnail'
    const secure_thumbnail = 'secure_thumbnail'
    const pictures = []
    const result = getImage(thumbnail, secure_thumbnail, pictures)
    expect(result).toEqual('secure_thumbnail')
  })

  it('should return the thumbnail if pictures array is empty and secure_thumbnail is undefined', () => {
    const thumbnail = 'thumbnail'
    const secure_thumbnail = undefined
    const pictures = []
    const result = getImage(thumbnail, secure_thumbnail, pictures)
    expect(result).toEqual('thumbnail')
  })
})
