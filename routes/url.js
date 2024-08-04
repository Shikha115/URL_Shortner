const {
  generateNewShortUrl,
  redirectToNewUrl,
  totalClicksOnUrl,
  getAllShortUrl,
} = require("../controller/url");

const express = require("express");
const router = express.Router();

router.get("/", getAllShortUrl);
router.post("/", generateNewShortUrl);
router.get("/:shortId", redirectToNewUrl);
router.get("/analytics/:shortId", totalClicksOnUrl);

module.exports = router;
