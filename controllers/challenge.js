const challenge1 = require("../challenges/challenge1.js");
const challenge2 = require("../challenges/challenge2.js");

const answerChallenge1 = []; //if it is a single variable it does not persist between requests

const answerChallenge2 = [];

var scrolling = "challenge-1";

var aString = "";

var bString = "";

var coinsString = "";
exports.getIndex = (req, res, next) => {
	res.render("index", {
		pageTitle: "Challenge",
		answerChallenge1: answerChallenge1,
		answerChallenge2: answerChallenge2,
		scrolling: scrolling,
		a: aString,
		b: bString,
		coins: coinsString,
	});
};

exports.getChallenge1 = (req, res, next) => {
	a = req.query.a.split(",").map((str) => parseInt(str));
	aString = req.query.a;
	b = req.query.b.split(",").map((str) => parseInt(str));
	bString = req.query.b;
	coinsString = "";
	scrolling = "challenge-1";
	answerChallenge1.push(challenge1.smallestDifference(a, b));

	res.redirect("/");
};

exports.getChallenge2 = (req, res, next) => {
	coins = req.query.coins.split(",").map((str) => parseInt(str));
	answerChallenge2.push(challenge2.nonConstructibleChange(coins));
	coinsString = req.query.coins;
	aString = "";
	bString = "";
	scrolling = "challenge-2";

	res.redirect("/");
};
