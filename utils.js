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
function mergeSortAux(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSortAux(arr.slice(0, mid));
	let right = mergeSortAux(arr.slice(mid));
	return merge(left, right);
}

exports.mergeSort = (arr) => {
	return mergeSortAux(arr);
};
