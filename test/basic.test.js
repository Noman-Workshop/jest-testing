const calculator = require('../src/basic');
const {describe, expect, test} = require('@jest/globals');

// Addition Tests
describe('Add', () => {
  const BVData = [
    [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10]
  ];

  describe.each(BVData)('BVA add(%i, %i), Expected %i', (a, b, expected) => {
    test(`add(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });

  const DTData = [
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54]
  ];

  describe.each(DTData)('DT add(%i, %i), Expected %i', (a, b, expected) => {
    test(`add(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });
});

// Subtraction tests
describe('Subtract', () => {
  const BVData = [
    [3, 2, 1],
    [9, 5, 4],
    [15, 12, 3],
    [10, 6, 4]
  ];

  describe.each(BVData)('BVA subtract(%i, %i), Expected %i', (a, b, expected) => {
    test(`subtract(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.subtract(a, b)).toBe(expected);
    });
  });

  const DTData = [
    [89, 0, 89],
    [-17, -35, 18],
    [65, -12, 77],
    [-78, 24, -102]
  ];

  describe.each(DTData)('DT subtract(%i, %i), Expected %i', (a, b, expected) => {
    test(`subtract(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.subtract(a, b)).toBe(expected);
    });
  });
});

// Multiplication tests
describe('Multiply', () => {
  const BVData = [
    [1, 2, 2],
    [4, 5, 20],
    [3, 12, 36],
    [4, 6, 24]
  ];

  describe.each(BVData)('BVA multiply(%i, %i), Expected %i', (a, b, expected) => {
    test(`multiply(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.multiply(a, b)).toBe(expected);
    });
  });

  const DTData = [
    [0, 89, 0],
    [-17, -35, 595],
    [65, -12, -780],
    [-78, 24, -1872]
  ];

  describe.each(DTData)('DT multiply(%i, %i), Expected %i', (a, b, expected) => {
    test(`multiply(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.multiply(a, b)).toBe(expected);
    });
  });
});

// Division tests
describe('Divide', () => {
  const BVData = [
    [2, 1, 2],
    [20, 5, 4],
    [36, 12, 3],
    [24, 6, 4]
  ];

  describe.each(BVData)('BVA divide(%i, %i), Expected %i', (a, b, expected) => {
    test(`divide(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.divide(a, b)).toBe(expected);
    });
  });

  const DTData = [
    [89, 1, 89],
    [-595, -35, 17],
    [-780, -12, 65],
    [-1872, 24, -78]
  ];

  describe.each(DTData)('DT divide(%i, %i), Expected %i', (a, b, expected) => {
    test(`divide(${a}, ${b}) should return ${expected}`, () => {
      expect(calculator.divide(a, b)).toBe(expected);
    });
  });
});