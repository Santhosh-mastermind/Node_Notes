const express = require("express");
const app = express();
const items = require("../Express/4.1.jsondata");

app.get("/", (req, res) => {
  res.json(items);
});
app.listen(5000, () => {
  console.log("Server is listening...");
});
