//Streams are used to read and write sequentially
//when we need to handel continuous or big files stream will be handy
// fout types in stream
//writable used to write data sequentially
//readablwe used to read data sequentially
//duplex used to write & read data sequentially
//transform where data can be modified when writing and reading just like events
//streaming interface extends from emitter class

const { createReadStream, writeFileSync } = require("fs");
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 9000,
  encoding: "utf8",
});
stream.on("data", (result) => console.log(result));
// const fs = require("fs");
// const stream = fs.createReadStream("./content/big.txt", {
//   highWaterMark: 9000,
//   encoding: "utf8",
// });
// stream.on("data", (result) => console.log(result));
