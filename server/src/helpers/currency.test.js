import { it, expect, describe } from 'vitest'

import { getDecimalPart, getDecimalLength } from './currency.js'

describe('getDecimalPart', () => {
  it('should return the decimal part of a positive number', () => {
    expect(getDecimalPart(3.14)).toBe(0.14)
  })

  it('should return the decimal part of a negative number', () => {
    expect(getDecimalPart(-4.56)).toBe(-0.56)
  })

  it('should return 0 if the number is an integer', () => {
    expect(getDecimalPart(7)).toBe(0)
  })

  it('should return the decimal part of a number with trailing zeros', () => {
    expect(getDecimalPart(10.0)).toBe(0)
  })
})

describe('getDecimalLength', () => {
  test('should return the decimal length of a number with decimal places', () => {
    expect(getDecimalLength(3.14)).toBe(2)
    expect(getDecimalLength(123.456789)).toBe(6)
  })

  test('should return 0 if the number does not have decimal places', () => {
    expect(getDecimalLength(42)).toBe(0)
    expect(getDecimalLength(1000.0)).toBe(0)
  })
})
