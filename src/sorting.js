// const selectionSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       let temp = array[i];
//       array[i] = array[minIndex];
//       array[minIndex] = temp;
//     }
//   }
//   return array;
// }
//
// const insertionSort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let key = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > key) {
//       array[j + 1] = array[j];
//       j = j - 1;
//     }
//     array[j + 1] = key;
//   }
//   return array;
// }

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const mergeSort = (arr) => {
  const merge = (left, right) => {
    let sortedArr = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    return [...sortedArr, ...left, ...right]
  }

  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

module.exports = {
  // selectionSort,
  // insertionSort,
  quickSort,
  mergeSort
}