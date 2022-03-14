const express = require("express");
const userControl = require("./controller/userControl");

const routes = express.Router();

routes.get("/", function (req, res) {
  res.json({ message: "Welcome to backend-nodejs-mongodb file" });
});

routes.get("/user", userControl.index);
routes.get("/user/:_id", userControl.detail);
routes.post("/user", userControl.store);
routes.delete("/user/:_id", userControl.delete);
routes.put("/user", userControl.update);

module.exports = routes;
