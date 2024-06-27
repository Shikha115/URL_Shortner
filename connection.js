const mongoose = require("mongoose");

const mongoConnect = async (url) => {
  return await mongoose
    .connect(url)
    .then(() => console.log("Connected to Mongo"))
    .catch((err) => console.log("Couldn't Connect to Mongo : ", err.message));
};

module.exports = mongoConnect;
