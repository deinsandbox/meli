import { describe, it, expect, vi } from 'vitest'
import { getItemById } from './service.js'
import { mockItems } from './service.mock.js'

global.fetch = vi.fn()

describe('getItemById', () => {
  beforeEach(() => {
    global.fetch.mockReset()
  })

  it('should return the item and description when exist', async () => {
    // Arrange
    const id = 'MLA905204703'
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockItems.ok.item) })
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockItems.ok.description) })

    const expectedResult = {
      data: {
        item: mockItems.ok.item,
        description: mockItems.ok.description,
      },
    }

    // Act
    const result = await getItemById(id)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return an error when id not exists', async () => {
    // Arrange
    const id = 'BLA905204703'
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockItems.error.item) })
    fetch.mockResolvedValueOnce({ json: () => Promise.resolve(mockItems.error.description) })

    // Act
    const result = await getItemById(id)

    // Assert
    expect(result.data).toMatchObject({})
    expect(result.error).toBeTruthy()
  })

  it('should return an error if fails', async () => {
    // Arrange
    const id = 'XLA905204703'
    fetch.mockResolvedValueOnce({ json: () => Promise.reject(Error('error')) })
    fetch.mockResolvedValueOnce({ json: () => Promise.reject(Error('error')) })

    // Act
    const result = await getItemById(id)

    // Assert
    expect(result.data).toMatchObject({})
    expect(result.ok).toBeFalsy()
  })
})
