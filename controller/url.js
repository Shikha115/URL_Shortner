const shortid = require("shortid");
const Url = require("../modals/url");

//get request
const getAllShortUrl = async (req, res) => {
  const data = await Url.find({});
  return res.json(data);
};

//post request
const generateNewShortUrl = async (req, res) => {
  const id = shortid(8);
  const body = req.body;
  if (!body.redirectURL) {
    return res.status(400).json({ error: "Please provide a valid URL" });
  }
  const data = await Url.create({
    shortId: id,
    redirectURL: body.redirectURL,
    visitHistory: [],
  });
  return res.json(data);
};

//get request
const redirectToNewUrl = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const data = await Url.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamps: Date.now() } } },
      { new: true }
    );
    console.log(
      `Redirecting you to ${data.redirectURL}\nVisit History = ${data.visitHistory}`
    );
    res.redirect(data.redirectURL);
  } catch (err) {
    res.send(`Failed to Redirect you,\n` + err.message);
  }

  res.end();
};

//get request
const totalClicksOnUrl = async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const data = await Url.findOne({ shortId });
    res.json({ "Visit History": data.visitHistory.length });
  } catch (err) {
    res.send(`Failed to count total no of clicks,\n` + err.message);
  }
  res.end();
};

module.exports = {
  generateNewShortUrl,
  redirectToNewUrl,
  totalClicksOnUrl,getAllShortUrl
};
