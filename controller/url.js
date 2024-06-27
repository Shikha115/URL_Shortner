const shortid = require("shortid");
const Url = require("../modals/url");

//get request
const getAllUrl = async (req, res) => {
  const data = await Url.find({});
  res.render("url", { data: data });
};

//post request
const generateNewShortUrl = async (req, res) => {
  const id = shortid(8);
  const redirectURL = req.body.redirectURL;
  const result = await Url.find({});

  if (!redirectURL) {
    return res.status(400).json({ error: "Please provide a valid URL" });
  }
  try {
    const data = await Url.create({
      shortId: id,
      redirectURL: redirectURL,
      visitHistory: [],
    });
    return res.json(data);
  } catch (err) {
    return res.json({
      status: "failed",
      msg: "Could not create the short id",
      error: err.message,
    });
  }
  // result.map(async (item) => {
  //   if (item.redirectURL === redirectURL) {
  //     return res.status(400).json({ error: "URL already exists" });
  //   } else {
  //   }
  // });
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
  totalClicksOnUrl,
  getAllUrl,
};
