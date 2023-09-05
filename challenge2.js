const Utils = require("./utils");

function nonConstructibleChange(coins) {
	if (Utils.empty(coins)) return 1;

	var cpCoins = [...coins];
	cpCoins = Utils.mergeSort(cpCoins);

	var maxPossibleChange = 0;

	//Taking advantage of the array being sorted,
	//if the next coin is bigger than the maximum possible change acumulated + 1
	//there is no way to construct it with bigger coins.

	for (let i = 0; i < cpCoins.length; i++) {
		let currentCoin = cpCoins[i];
		if (currentCoin > maxPossibleChange + 1) return maxPossibleChange + 1;

		maxPossibleChange += currentCoin;
	}

	return maxPossibleChange + 1;
}

coins = [5, 7, 1, 1, 2, 3, 22];

console.log(nonConstructibleChange(coins));
