const Utils = require("../util/utils");

// Time Complexity: O(n * log(n) + m * log(m))
// Space Complexity: O(n + m)

function smallestDifference(a, b) {
	//In case we are not allowed to sort original array
	var cpA = [...a];
	var cpB = [...b];

	cpA = Utils.mergeSort(cpA);
	cpB = Utils.mergeSort(cpB);

	var minDiff = Infinity;

	//As arrays are sorted, just moving the minimum of both is the only way to decrease the difference

	var notZero = true;

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


