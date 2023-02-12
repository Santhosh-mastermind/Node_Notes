const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Title Changed</title></head>");
  res.write("<body><h1>SANTHOSH</h1></body>");
  res.write("</html>");
  res.end();
  //   console.log(req);
});
server.listen(3000);
