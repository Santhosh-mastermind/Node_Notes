const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("./index.html");
const homestyles = readFileSync("./styles.css");
const homelogo = readFileSync("./logo.svg");
const homelogic = readFileSync("./browser-app.js");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homestyles);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homelogo);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homelogic);
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Error Page</h1>");
    res.end();
  }
});
server.listen(3000);
