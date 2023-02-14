const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("../public")); // All resources
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../public/index.html"));
// });
app.all("*", (req, res) => {
  res.status(404).send("Resource not avaliable");
});

app.listen(5000, () => {
  console.log("Server is listining...");
});
