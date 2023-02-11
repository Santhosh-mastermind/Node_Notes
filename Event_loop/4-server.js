const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Responsing");
  res.end("Hello world");
});
server.listen(3000, () => {
  console.log("Server port 3000 listening Dood....... ");
});
//