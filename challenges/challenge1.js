const Utils = require('../util/utils');

// Time Complexity: O(n * log(n) + m * log(m))
// Space Complexity: O(n + m)

/**
 * Find the smallest absolute difference between elements of two sorted arrays.
 *
 * @param {number[]} a - The first sorted array.
 * @param {number[]} b - The second sorted array.
 * @return {number} Smallest absolute difference.
 */
function smallestDifference(a, b) {
  // In case we are not allowed to sort original array.
  let cpA = [...a];
  let cpB = [...b];
  cpA = Utils.mergeSort(cpA);
  cpB = Utils.mergeSort(cpB);
  let minDiff = Infinity;
  // As arrays are sorted, just moving the minimum of
  // both is the only way to decrease the difference.

  let notZero = true;

  for (let i = 0, j = 0; i < a.length && j < b.length && notZero; ) {
    currentDiff = Math.abs(cpA[i] - cpB[j]);
    minDiff = currentDiff < minDiff ? currentDiff : minDiff;
    notZero = minDiff === 0 ? false : true;
    if (cpA[i] < cpB[j]) i++;
    else j++;
  }

  return minDiff;
}

exports.smallestDifference = smallestDifference;
