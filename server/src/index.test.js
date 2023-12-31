import { it, expect, describe } from 'vitest'
import request from 'supertest'

import app from './index.js'

describe('route endpoints', () => {
  it('should return server ping response', async () => {
    const expected = {
      name: 'MELI Server',
      version: expect.any(String),
    }

    const result = await request(app).get('/')

    expect(result.statusCode).toEqual(200)
    expect(result.body).toStrictEqual(expected)
  })

  it('should return an error when endpoint not found', async () => {
    const result = await request(app).get('/foo')

    expect(result.status).toEqual(404)
    expect(result.body).toStrictEqual({ code: 404, error: 'not found' })
  })

  it('should return the query endpoint', async () => {
    const result = await request(app).get('/api/items?q=foo')

    expect(result.status).toEqual(200)
    expect(result.body).toHaveProperty('author')
    expect(result.body).toHaveProperty('categories')
    expect(result.body).toHaveProperty('items')
    expect(result.body.items[0]).toHaveProperty('id')
    expect(result.body.items[0]).toHaveProperty('title')
    expect(result.body.items[0]).toHaveProperty('price')
    expect(result.body.items[0]).toHaveProperty('picture')
    expect(result.body.items[0]).toHaveProperty('condition')
    expect(result.body.items[0]).toHaveProperty('free_shipping')
    expect(result.body.categories).toHaveLength(result.body.items.length)
  })

  it('should return the empty query endpoint', async () => {
    const result = await request(app).get('/api/items?q=foobar')

    expect(result.status).toEqual(200)
    expect(result.body).toHaveProperty('author')
    expect(result.body).toHaveProperty('categories')
    expect(result.body).toHaveProperty('items')
    expect(result.body.categories).toMatchObject([])
    expect(result.body.items).toMatchObject([])
  })

  it('should return an error when query not found', async () => {
    const result = await request(app).get('/api/items?q=')
    expect(result.status).toEqual(400)
  })

  it('should return the item endpoint', async () => {
    const result = await request(app).get('/api/items/MLA905204703')
    expect(result.status).toEqual(200)
    expect(result.body).toHaveProperty('author')
    expect(result.body).toHaveProperty('item')
    expect(result.body.item).toHaveProperty('id')
    expect(result.body.item).toHaveProperty('title')
    expect(result.body.item).toHaveProperty('price')
    expect(result.body.item).toHaveProperty('picture')
    expect(result.body.item).toHaveProperty('condition')
    expect(result.body.item).toHaveProperty('free_shipping')
    expect(result.body.item).toHaveProperty('sold_quantity')
    expect(result.body.item).toHaveProperty('description')
  })

  it('should return an error when item id not found', async () => {
    const result = await request(app).get('/api/items/')
    expect(result.status).toEqual(400)
  })

  it('should return the categories endpoint', async () => {
    const result = await request(app).get('/api/categories/MLA90306')
    expect(result.status).toEqual(200)
    expect(result.body).toHaveProperty('path')
  })

  it('should return an error when category id not found', async () => {
    const result = await request(app).get('/api/categories/')

    expect(result.status).toEqual(404)
    expect(result.body).toStrictEqual({ code: 404, error: 'not found' })
  })
})
