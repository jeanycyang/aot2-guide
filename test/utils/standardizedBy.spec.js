import { expect } from 'chai'
import standardizedBy from '../../src/utils/standardizedBy'

describe('standardizedBy', function () {
  describe('special cases', function () {
    it('should return an empty object if array is empty', function () {
      expect(standardizedBy('whatever', [])).to.deep.equal({})
    })
  })
  describe('standardized by id', function () {
    it('should convert array to a standardized object', function () {
      expect(standardizedBy('id', [
        {
          id: 1, name: 'A', p1: null, p2: 2,
        },
        {
          id: 2, name: 'B', p1: 1, p2: 0,
        },
      ])).to.deep.equal({
        1: {
          id: 1, name: 'A', p1: null, p2: 2,
        },
        2: {
          id: 2, name: 'B', p1: 1, p2: 0,
        },
      })
    })
  })
  describe('standardized by name', function () {
    it('should convert array to a standardized object', function () {
      expect(standardizedBy('name', [
        {
          id: 1, name: 'A-B-C', p1: null, p2: 2,
        },
        {
          id: 2, name: 'B', p1: 1, p2: 0,
        },
      ])).to.deep.equal({
        'A-B-C': {
          id: 1, name: 'A-B-C', p1: null, p2: 2,
        },
        B: {
          id: 2, name: 'B', p1: 1, p2: 0,
        },
      })
    })
  })
  describe('standardized by customized function', function () {
    it('should convert array to a standardized object', function () {
      expect(standardizedBy(({ id, name }) => `${id}-${name}`, [
        {
          id: 1, name: 'A-B-C', p1: null, p2: 2,
        },
        {
          id: 2, name: 'B', p1: 1, p2: 0,
        },
      ])).to.deep.equal({
        '1-A-B-C': {
          id: 1, name: 'A-B-C', p1: null, p2: 2,
        },
        '2-B': {
          id: 2, name: 'B', p1: 1, p2: 0,
        },
      })
    })
  })
})
