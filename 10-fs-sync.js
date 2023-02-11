//READ FS
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

//WRITE FS
writeFileSync("./content/result.txt", `1-->${first}  2-->${second}`);
