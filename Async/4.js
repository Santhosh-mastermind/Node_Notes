// const { readFile, writeFile } = require("fs");

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise("../content/first.txt", "utf8");
//     await writeFilePromise(
//       "../content/4minegrenade.txt",
//       "This txt file is empty"
//     );
//     console.log(first);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    writeFile("../content/4minegrenade2.txt", "This txt file is empty");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
// best approach
