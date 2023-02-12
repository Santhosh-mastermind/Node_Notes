const http = require("http");
const fs = require("fs");
// const server = http
//   .createServer((req, res) => {
//     const result = fs.readFileSync("./content/big.txt", "utf8");
//     console.log("Server is listening");
//     res.end(result);
//     process.exit();
//   })
//   .listen(3000);

http
  .createServer((req, res) => {
    const filestream = fs.createReadStream("./content/big.txt", "utf8");
    filestream.on("open", () => {
      filestream.pipe(res);
    });
    // filestream.on("error", (err) => {
    //   res.end(err);
    // });
  })
  .listen(3000);
