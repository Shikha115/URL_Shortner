const express = require("express");
const mongoConnect = require("./connection");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

//connection
mongoConnect(process.env.URL);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs"); //variable set

//routes
app.use("/url", require("./routes/url"));

//server
app.listen(port, () => {
  console.log(`Server Started at http://localhost:${port}`);
  // console.log(`Server Started at https://url-shortner-wheat-rho.vercel.app:${port}`)
});
