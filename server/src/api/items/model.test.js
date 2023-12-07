import { describe, it, expect } from 'vitest'
import { parseItemModel } from './model.js'
import { mockItems } from './service.mock.js'
import { mockModelItem } from './model.mock.js'

describe('parseItemModel', () => {
  it('should return model item', async () => {
    // Arrange
    const data = {
      item: mockItems.ok.item,
      description: mockItems.ok.description,
    }
    const expectedResult = mockModelItem.ok.item

    // Act
    const result = parseItemModel(data)

    // Assert
    expect(result).toMatchObject(expectedResult)
  })

  it('should return not model item', async () => {
    // Arrange
    const data = {}
    const expectedResult = {}

    // Act
    const result = parseItemModel(data)

    // Assert
    expect(result).toMatchObject(expectedResult)
  })
})
