const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: [true, "Short ID can't be empty"],
      unique: [true, "Short ID must be unique"],
    },
    redirectURL: {
      type: String,
      required: [true, "Redirect URL can't be empty"],
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
