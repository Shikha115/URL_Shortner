const {
  generateNewShortUrl,
  redirectToNewUrl,
  totalClicksOnUrl,
  getAllUrl,
} = require("../controller/url");

const express = require("express");
const router = express.Router();

router.route("/").post(generateNewShortUrl).get(getAllUrl);
router.get("/:shortId", redirectToNewUrl);
router.get("/analytics/:shortId", totalClicksOnUrl);

module.exports = router;
