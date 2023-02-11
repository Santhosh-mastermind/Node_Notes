const path = require("path");
console.log(path);
console.log(path.sep);

const addpath = path.join("content", "sunfolder", "text.txt"); //used to join path
console.log(addpath);

const base = path.basename(addpath); // used to provide base path
console.log(base);

const fullpath = path.resolve(addpath); // used to show absolute path
console.log(fullpath);

const ab = path.resolve(__dirname, "content", "subfolder", "text.txt"); // same as above
console.log(ab);
