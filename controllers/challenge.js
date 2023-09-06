const challenge1 = require('../challenges/challenge1.js');
const challenge2 = require('../challenges/challenge2.js');

let answerChallenge1 = '';

let answerChallenge2 = '';

let scrolling = 'challenge-1';

let aString = '';

let bString = '';

let coinsString = '';
exports.getIndex = (req, res, next) => {
  res.render('index', {
    pageTitle: 'Challenge',
    answerChallenge1: answerChallenge1,
    answerChallenge2: answerChallenge2,
    scrolling: scrolling,
    a: aString,
    b: bString,
    coins: coinsString,
  });
};

exports.getChallenge1 = (req, res, next) => {
  a = req.query.a.split(',').map((str) => parseInt(str));
  aString = req.query.a;
  b = req.query.b.split(',').map((str) => parseInt(str));
  bString = req.query.b;
  coinsString = '';
  scrolling = 'challenge-1';
  answerChallenge2 = '';
  answerChallenge1 = challenge1.smallestDifference(a, b).toString();

  res.redirect('/');
};

exports.getChallenge2 = (req, res, next) => {
  coins = req.query.coins.split(',').map((str) => parseInt(str));
  answerChallenge2 = challenge2.nonConstructibleChange(coins).toString();
  coinsString = req.query.coins;
  aString = '';
  bString = '';
  answerChallenge1 = '';
  scrolling = 'challenge-2';

  res.redirect('/');
};
