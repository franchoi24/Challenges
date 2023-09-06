const challenge1 = require("../challenges/challenge1.js");
const challenge2 = require("../challenges/challenge2.js");

const answerChallenge1 = []; //if it is a single variable it does not persist between requests

const answerChallenge2 = [];

exports.getIndex = (req, res, next) => {
	res.render("index", {
		pageTitle: "Challenge",
		answerChallenge1: answerChallenge1,
		answerChallenge2: answerChallenge2
	});
};

exports.getChallenge1 = (req, res, next) => {
	a = req.query.a.split(",").map((str) => parseInt(str));
	b = req.query.b.split(",").map((str) => parseInt(str));

	answerChallenge1.push(challenge1.smallestDifference(a, b));

	res.redirect("/");
};

exports.getChallenge2 = (req, res, next) => {
	coins = req.query.coins.split(",").map((str) => parseInt(str));
	answerChallenge2.push(challenge2.nonConstructibleChange(coins));

	res.redirect("/");
};
