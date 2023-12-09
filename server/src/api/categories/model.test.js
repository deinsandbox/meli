import { describe, it, expect } from 'vitest'
import { parseCategoriesModel } from './model.js'
import { mockCategories } from './service.mock.js'
import { mockModelCategories } from './model.mock.js'

describe('parseCategoriesModel', () => {
  it('should return model category', async () => {
    // Arrange
    const data = mockCategories.ok
    const expectedResult = mockModelCategories.ok

    // Act
    const result = parseCategoriesModel(data)

    // Assert
    expect(result).toMatchObject(expectedResult)
  })

  it('should not return model category', async () => {
    // Arrange
    const data = {}
    const expectedResult = {}

    // Act
    const result = parseCategoriesModel(data)

    // Assert
    expect(result).toMatchObject(expectedResult)
  })
})
