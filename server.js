const express = require("express"); // framework
const cookieParser = require("cookie-parser"); // data exchange
const cors = require("cors"); // share data among domains
const path = require("path"); // folders path
const mongoose = require("mongoose");

const routes = require("./src/routes"); // app routes

const app = express(); // all methods from express framework

mongoose.connect(
  "mongodb://localhost:27017/backend-nodejs-mongodb",
  {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useFindAndModify: true
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("mongodb succesfully connected");
    }
  }
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(3003, function () {
  console.log("server running on 3003 - server.js file");
});
