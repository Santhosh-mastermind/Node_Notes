const os = require("os");
const temp = os.userInfo();
console.log(temp);

const time = os.uptime();
const na = os.hostname();
console.log(`System time is :${time}`);
console.log(na);
const all = {
  name: os.hostname(),
  id1: os.type(),
  id2: os.platform(),
};
console.log(all);
