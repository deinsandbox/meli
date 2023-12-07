import { it, expect, describe } from 'vitest'
import { isEmptyObject } from './validations.js'

describe('isEmptyObject', () => {
  it('returns true for an empty object', () => {
    const obj = {}
    const result = isEmptyObject(obj)
    expect(result).toBe(true)
  })

  it('returns false for an object with properties', () => {
    const obj = { name: 'John', age: 30 }
    const result = isEmptyObject(obj)
    expect(result).toBe(false)
  })

  it('returns true for an object with no own properties', () => {
    const obj = Object.create(null)
    const result = isEmptyObject(obj)
    expect(result).toBe(true)
  })

  it('returns true for an object with only inherited properties', () => {
    const obj = Object.create({ name: 'John' })
    const result = isEmptyObject(obj)
    expect(result).toBe(true)
  })
})
