const express = require("express");
const router = express.Router();
const challengeController = require("../controllers/challenge.js");

router.get("/", challengeController.getIndex);

module.exports = router;
