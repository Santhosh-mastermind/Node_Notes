// readFile("../content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

const { readFile } = require("fs");

const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getData("../content/first.txt")
  .then((result) => console.log(result))
  .catch((result) => console.log(result));
