const {quickSort, mergeSort} = require('../src/sorting');
const {describe, test, expect} = require('@jest/globals')

describe('Sorting Algorithms', () => {
  const testData = [
    [[3, 2, 1], [1, 2, 3]],
    [[9, 5, 4, 8, 7, 6], [4, 5, 6, 7, 8, 9]],
    [[15, 12, 3, 10, 6, 4], [3, 4, 6, 10, 12, 15]],
    [[89, 0, -17, -35, 65, -12, -78, 24], [-78, -35, -17, -12, 0, 24, 65, 89]],
    [[1], [1]]
  ];

  // describe.each(testData)('Selection Sort', (unsorted, sorted) => {
  //   test(`selectionSort(${unsorted}) should return ${sorted}`, () => {
  //     expect(selectionSort([...unsorted])).toEqual(sorted);
  //   });
  // });
  //
  // describe.each(testData)('Insertion Sort', (unsorted, sorted) => {
  //   test(`insertionSort(${unsorted}) should return ${sorted}`, () => {
  //     expect(insertionSort([...unsorted])).toEqual(sorted);
  //   });
  // });

  describe.each(testData)('Quick Sort', (unsorted, sorted) => {
    test(`quickSort(${unsorted}) should return ${sorted}`, () => {
      expect(quickSort([...unsorted])).toEqual(sorted);
    });
  });

  describe.each(testData)('Merge Sort', (unsorted, sorted) => {
    test(`mergeSort(${unsorted}) should return ${sorted}`, () => {
      expect(mergeSort([...unsorted])).toEqual(sorted);
    });
  });
});