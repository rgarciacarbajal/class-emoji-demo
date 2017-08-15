const emoji = require('node-emoji');
const http = require('http');

const server = http.createServer((req, res) => {
  res.write(emoji.random().emoji);
  res.end();

});

server.listen(8001);
// let newArray = [];
//
// for (let i = 0; i < 10;i++){
//   newArray.push(emoji.random().emoji);
// }
// for (let i = 0; i < newArray.length; i++){
//   console.log(newArray[i]);
// }
