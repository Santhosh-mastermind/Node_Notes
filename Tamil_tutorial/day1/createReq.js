const http = require("http");
function rqListner(req, res) {
  console.log(req);
  // process.exit();
}
const server = http.createServer(rqListner);
server.listen(100);
