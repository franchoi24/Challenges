// Time Complexity: O(n * log(n) + m * log(m))
// Space Complexity: O(n + m)

function smallestDifference(a, b) {
	//In case we are not allowed to sort original array
	var cpA = [...a];
	var cpB = [...b];

	cpA = mergeSort(cpA);
	cpB = mergeSort(cpB);

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

function merge(arr1, arr2) {
	let arr = [];
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

//Time complexity: O(n * log(n))
//Space complexity: O(n)
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}

const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];

console.log(smallestDifference(a, b));

const c = [10, 5, 40];
const d = [50, 90, 80];

console.log(smallestDifference(c, d));
