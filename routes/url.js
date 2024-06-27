const {
  generateNewShortUrl,
  redirectToNewUrl,
  totalClicksOnUrl,
} = require("../controller/url");

const express = require("express");
const router = express.Router();

router.post("/", generateNewShortUrl);
router.get("/:shortId", redirectToNewUrl);
router.get("/analytics/:shortId", totalClicksOnUrl);

module.exports = router;
