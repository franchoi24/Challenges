const expect = require('chai').expect;
const Challenge1 = require('../challenges/challenge1');
const Challenge2 = require('../challenges/challenge2');

describe('Challenge 1', () => {
  it('Testing smallest distance between two arrays', () => {
    const a = [1, 3, 15, 11, 2];
    const b = [23, 127, 235, 19, 8];
    expect(Challenge1.smallestDifference(a, b)).to.equal(3);
    const c = [10, 5, 40];
    const d = [50, 90, 80];
    expect(Challenge1.smallestDifference(c, d)).to.equal(10);
  });
});

describe('Challenge 2', () => {
  it('Testing non constructible change', () => {
    const coins = [5, 7, 1, 1, 2, 3, 22];
    expect(Challenge2.nonConstructibleChange(coins)).to.equal(20);
  });
});
