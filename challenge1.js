function smallestDifference(a, b) {
	//In case we are not allowed to sort original array
	var cpA = [...a];
	var cpB = [...b];

	cpA = mergeSort(cpA);
	cpB = mergeSort(cpB);

	var minDiff = Infinity;

	//As arrays are sorted, there is no need to go on if difference increases

	for (let i = 0; i < cpA.length; i++) {
		let prevDiff = Infinity;
		let diffDecreased = true;
		for (let j = 0; j < cpB.length && diffDecreased; j++) {
			currentDiff = Math.abs(cpA[i] - cpB[j]);
			minDiff = currentDiff < minDiff ? currentDiff : minDiff;
			diffDecreased = currentDiff < prevDiff ? true : false;
		}
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

//Time complexity O(n * log(n))
//Space vomplexity O(n)
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


console.log(smallestDifference(c, d)); // output: 10