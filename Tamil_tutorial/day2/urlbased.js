const http = require("http");
const server = http.createServer((req, res) => {
  // const url = req.url;
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello</title></head>");
    res.write("<body>gfansdbkjngdkaefbksfbfbskn</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node js</title></head>");
  res.write("<body><h1>Santhosh</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
