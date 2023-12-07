import { describe, it, expect } from 'vitest'
import { parceItemModel } from './model.js'
import { mockItems } from './service.mock.js'
import { mockModelItem } from './model.mock.js'

describe('parceItemModel', () => {
  it('should return model item', async () => {
    // Arrange
    const data = {
      item: mockItems.ok.item,
      description: mockItems.ok.description,
    }
    const expectedResult = mockModelItem.ok.item

    // Act
    const result = parceItemModel(data)

    // Assert
    expect(result).toMatchObject(expectedResult)
  })

  it('should return not model item', async () => {
    // Arrange
    const data = {}
    const expectedResult = {}

    // Act
    const result = parceItemModel(data)

    // Assert
    expect(result).toMatchObject(expectedResult)
  })
})
