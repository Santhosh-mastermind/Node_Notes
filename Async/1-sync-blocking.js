const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Home Page");
  }
  if (req.url === "/about") {
    //blocking code
    for (let i = 0; i <= 100; i++) {
      for (let j = 0; j <= 1000; j++) {
        console.log(`${i}  ${j}`);
      }
    }
    return res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("port 5000 is listening...");
});
//practical example of blocking server if one req take more time then, the  next request need to wait till that last request gets completed
