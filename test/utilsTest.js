var expect = require("chai").expect;
var Utils = require("../util/utils");

describe("Utils", () => {
	it("Test merging two arrays and sorting them", () => {
		const array1 = [1, 3, 5, 7, 9];
		const array2 = [2, 4, 6, 8, 10];
		const mergedArray = Utils.merge(array1, array2);
		expect(mergedArray).eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it("Testing the sorting of an array", () => {
		var array = [
			3221, 1, 10, 9680, 577, 9430, 7, 5622, 4793, 2030, 3138, 82, 2599, 743,
			4127,
		];
		array = Utils.mergeSort(array);
		expect(array).eql([
			1, 7, 10, 82, 577, 743, 2030, 2599, 3138, 3221, 4127, 4793, 5622, 9430,
			9680,
		]);
	});

	it("Testing empty function", () => {
		const emptyArr = [];
		expect(Utils.empty(emptyArr)).to.be.true;
		const nonEmptyArr = [1, 2, 3];
		expect(Utils.empty(nonEmptyArr)).to.be.false;
	});
});
