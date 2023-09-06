const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.js");

router.get("/", challengeController.getIndex);

router.get("/challenge1", challengeController.getChallenge1);

router.get("/challenge2", challengeController.getChallenge2);

module.exports = router;
