const { readFile } = require("fs");

console.log("Starting");
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Ending Task");
});
console.log("New Task Begining");
