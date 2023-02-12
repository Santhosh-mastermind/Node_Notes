const names = require("./3-name");
const fun = require("./4-function");
const data = require("./6-alternative-exports");
require("./7-mind-grenade"); // we didn't assign to any variable //
fun.call("santhosh");
fun.call(names.dee);
fun.call(names.san);
console.log(data);
console.log(fun);
