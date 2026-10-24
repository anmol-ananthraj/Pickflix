const express = require("express");
const router = express.Router();

const { getOmdbDetails } = require("../controllers/omdbController");

router.get("/:imdbId", getOmdbDetails);

module.exports = router;