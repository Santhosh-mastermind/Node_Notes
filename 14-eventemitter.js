// const EventEmitter = require("events");
// const customEmitter = new EventEmitter();
// //on llisten for an event
// //emit emits an event
// customEmitter.on("response", () => {
//   console.log("Data Received");
// });
// customEmitter.on("response", (name, age) => {
//   console.log(`Data Received Name: ${name} age: ${age}`);
// });
// customEmitter.emit("response", "santhosh", "23");

const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  res.end("Welcome");
});
server.listen(3000);
