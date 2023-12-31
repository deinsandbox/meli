import { describe, it, expect, vi } from 'vitest'
import { getItemsByQuery } from './service.js'
import { mockQuery } from './service.mock.js'

global.fetch = vi.fn()

describe('getItemsByQuery', () => {
  beforeEach(() => {
    global.fetch.mockReset()
  })

  it('should return a list of items when query have results', async () => {
    // Arrange
    const q = 'foo'
    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockQuery.ok) })

    const expectedResult = {
      data: mockQuery.ok,
    }

    // Act
    const result = await getItemsByQuery(q)

    // Assert
    expect(result).toEqual(expectedResult)
  })

  it('should return an empty list when query does not have results', async () => {
    // Arrange
    const q = 'foobar'
    fetch.mockResolvedValue({ ok: true, json: () => Promise.resolve(mockQuery.error) })

    // Act
    const result = await getItemsByQuery(q)

    // Assert
    expect(result.data).toMatchObject(mockQuery.error)
  })

  it('should return an error if fails', async () => {
    // Arrange
    const q = 'foobar'
    fetch.mockResolvedValue({ json: () => Promise.reject(Error('error')) })

    // Act
    const result = await getItemsByQuery(q)

    // Assert
    expect(result.data).toMatchObject({})
    expect(result.ok).toBeFalsy()
  })
})
