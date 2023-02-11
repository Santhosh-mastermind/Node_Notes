const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<h1>Welcome</h1>");
//     return res.end();
//   }
//   if (req.url === "/about") {
//     res.write("<h1>About Page</h1>");
//     return res.end();
//   }
//   res.write("<h1>Oops something went wrong</h1>");
//   return res.end();
// });
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("<h1>Welcome</h1>");
  }
  if (req.url === "/about") {
    return res.end(`<h1>About Page</h1>`);
  }
  res.end("<h1>Oops something went wrong</h1>");
});
server.listen(3000);
