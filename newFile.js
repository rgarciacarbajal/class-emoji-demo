const emoji = require('node-emoji');


let newArray = [emoji.random(), emoji.random(), emoji.random(), emoji.random(), emoji.random(), emoji.random(), emoji.random(), emoji.random(), emoji.random(), emoji.random()];

function loopArray (array){
  for (i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}
loopArray(newArray);
