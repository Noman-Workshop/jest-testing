const calculator = require('../src/advanced');
const {describe, expect, test} = require('@jest/globals');

// Power tests
describe('Power', () => {
  const BVData = [
    [2, 2, 4],
    [3, 3, 27],
    [4, 4, 256],
    [5, 5, 3125]
  ];

  describe.each(BVData)('BVA pow(%i, %i), Expected %i', (a, b, expected) => {
    test(`pow(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.pow(a, b)).toBe(expected);
    });
  });

  const DTData = [
    [0, 0, 1],
    [-2, 2, 4],
    [3, -1, 1 / 3],
    [-2, -2, 0.25]
  ];

  describe.each(DTData)('DT pow(%i, %i), Expected %i', (a, b, expected) => {
    test(`pow(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.pow(a, b)).toBe(expected);
    });
  });
});

// Modulo tests
describe('Modulo', () => {
  const BVData = [
    [10, 2, 0],
    [15, 4, 3],
    [20, 6, 2],
    [25, 7, 4]
  ];

  describe.each(BVData)('BVA modulo(%i, %i), Expected %i', (a, b, expected) => {
    test(`modulo(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.modulo(a, b)).toBe(expected);
    });
  });

  const DTData = [
    [0, 1, 0],
    [-2, 2, 0],
    [3, -1, 0],
    [-2, -2, 0]
  ];

  describe.each(DTData)('DT modulo(%i, %i), Expected %i', (a, b, expected) => {
    test(`modulo(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.modulo(a, b) === expected).toEqual(true)
    });
  });
});
