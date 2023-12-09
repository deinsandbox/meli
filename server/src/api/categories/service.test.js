import { describe, it, expect, vi } from 'vitest'
import { getCategoryById } from './service.js'
import { mockCategories } from './service.mock.js'

global.fetch = vi.fn()

describe('getCategoryById', () => {
  beforeEach(() => {
    global.fetch.mockReset()
  })

  it('should return a category when exist', async () => {
    // Arrange
    const id = 'foo'
    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockCategories.ok) })

    const expectedResult = {
      data: mockCategories.ok,
    }

    // Act
    const result = await getCategoryById(id)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return an error when category does not exist', async () => {
    // Arrange
    const id = 'foobar'
    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockCategories.error) })

    // Act
    const result = await getCategoryById(id)

    // Assert
    expect(result).toMatchObject(mockCategories.error)
  })

  it('should return an error if fails', async () => {
    // Arrange
    const id = 'foobar'
    fetch.mockResolvedValue({ json: () => Promise.reject(Error('error')) })

    // Act
    const result = await getCategoryById(id)

    // Assert
    expect(result.data).toMatchObject({})
    expect(result.ok).toBeFalsy()
  })
})
