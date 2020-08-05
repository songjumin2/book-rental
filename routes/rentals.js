const express = require("express");
const { rentalBook } = require("../controllers/rentals");

const router = express.Router();

router.route("/").post(rentalBook);

module.exports = router;
