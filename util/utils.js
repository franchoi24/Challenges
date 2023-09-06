// Time complexity: O(n)
// Space complexity: O(n)
/**
 * Merge two sorted arrays into a single sorted array.
 *
 * @param {number[]} arr1 - The first sorted array to merge.
 * @param {number[]} arr2 - The second sorted array to merge.
 * @return {number[]} Sorted array containing all elements from arr1 and arr2.
 */
function merge(arr1, arr2) {
  const arr = [];
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
    const val1 = arr1[i];
    const val2 = arr2[j];
    if (i === arr1.length) {
      arr.push(val2);
      j++;
    } else if (j === arr2.length) {
      arr.push(val1);
      i++;
    } else if (arr1[i] > arr2[j]) {
      arr.push(val2);
      j++;
    } else {
      arr.push(val1);
      i++;
    }
  }

  return arr;
}

// Time complexity: O(n * log(n))
// Space complexity: O(n)

/**
 * Sorts an array of numbers recursively.
 *
 * @param {Array<number>} arr The array to sort.
 * @return {Array<number>} The sorted array.
 */
function mergeSortAux(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSortAux(arr.slice(0, mid));
  const right = mergeSortAux(arr.slice(mid));
  return merge(left, right);
}

exports.mergeSort = (arr) => {
  return mergeSortAux(arr);
};

exports.empty = (arr) => {
  return arr.length === 0;
};

if (process.env.NODE_ENV === 'test') {
  exports.merge = merge;
}
