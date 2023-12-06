import { it, expect, describe, vi } from 'vitest'
import request from 'supertest'

import app from './index.js'

describe('route endpoints', () => {
  it('should return server ping response', async () => {
    const expected = {
      name: 'MELI Server',
      version: expect.any(String),
    }

    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual(expected)
  })

  it('should return an error when endpoint not found', async () => {
    const res = await request(app).get('/foo')
    expect(res.statusCode).toEqual(404)
    expect(res.body).toStrictEqual({ code: 404, error: 'not found' })
  })

  it('should return the query endpoint', async () => {
    const expected = {
      q: 'foo',
    }

    const res = await request(app).get('/api/items?q=foo')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual(expected)
  })

  it('should return an error when query not found', async () => {
    const res = await request(app).get('/api/items?q=')
    expect(res.statusCode).toEqual(400)
  })

  it('should return the item endpoint', async () => {
    const expected = {
      id: 'foo',
    }
    const res = await request(app).get('/api/items/foo')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toStrictEqual(expected)
  })

  it('should return an error when item id not found', async () => {
    const res = await request(app).get('/api/items/')
    expect(res.statusCode).toEqual(400)
  })
})
