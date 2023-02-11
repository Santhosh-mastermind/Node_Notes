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
const start = async () => {
  try {
    const first = await getData("../content/first.txt");
    const second = await getData("../content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
