const express = require("express");
const mongoConnect = require("./connection");
require("dotenv").config();
const app = express();
const port = process.env.PORT;


//connection
mongoConnect(process.env.URL);

//middleware
app.use(express.json());

//routes
app.use("/url", require("./routes/url"));


//server
app.listen(port, () =>
  console.log(`Server Started at http://localhost:${port}`)
);
