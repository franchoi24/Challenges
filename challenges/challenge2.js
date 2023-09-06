const Utils = require('../util/utils');

/**
 * Calculate the smallest non-constructible change that
 * cannot be created using the given coins.
 *
 * @param {number[]} coins - An array of coin denominations.
 * @return {number} Smallest non-constructible change that cannot be created.
 */
function nonConstructibleChange(coins) {
  if (Utils.empty(coins)) return 1;

  let cpCoins = [...coins];
  cpCoins = Utils.mergeSort(cpCoins);

  let maxPossibleChange = 0;

  // Taking advantage of the array being sorted,
  // if the next coin is bigger than the maximum possible change acumulated + 1
  // there is no way to construct it with bigger coins.

  for (let i = 0; i < cpCoins.length; i++) {
    const currentCoin = cpCoins[i];
    if (currentCoin > maxPossibleChange + 1) return maxPossibleChange + 1;

    maxPossibleChange += currentCoin;
  }

  return maxPossibleChange + 1;
}

exports.nonConstructibleChange = nonConstructibleChange;
