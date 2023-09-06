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

if (process.env.NODE_ENV === "test") {
	exports.smallestDifference = smallestDifference;
}

const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];
console.log("=====================================");
console.log("Arrays:");
console.log("a: ", a);
console.log("b: ", b);
console.log("Smallest diference: ", smallestDifference(a, b));
console.log("=====================================");
const c = [10, 5, 40];
const d = [50, 90, 80];
console.log("Arrays:");
console.log("a: ", c);
console.log("b: ", d);
console.log("Smallest diference: ", smallestDifference(c, d));
console.log("=====================================");