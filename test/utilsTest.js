var expect = require("chai").expect;
const Utils = require("../utils");

it("Test merging two arrays and sorting them", () => {
	const array1 = [1, 2, 3, 4, 5];
	const array2 = [6, 7, 8, 9, 10];
	const mergedArray = Utils.merge(array1, array2);
	console.log(mergedArray === [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	expect(mergedArray).eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
