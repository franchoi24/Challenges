const Challenge2 = require('./challenge2');

coins = [5, 7, 1, 1, 2, 3, 22];

console.log('=====================================');
console.log('Coins: ', coins);
console.log(
    'Non constructible change: ',
    Challenge2.nonConstructibleChange(coins),
);
console.log('=====================================');

coins = [1, 15, 1, 1, 2, 3, 4];

console.log('=====================================');
console.log('Coins: ', coins);
console.log(
    'Non constructible change: ',
    Challenge2.nonConstructibleChange(coins),
);
console.log('=====================================');
