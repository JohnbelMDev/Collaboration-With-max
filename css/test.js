//const { log } = require('console');
const fs = require('fs')

let holdFileContent
let array
// let data = "How to write a file in Javascript."

let randomNumber = Math.floor(Math.random() * 100);
export function buttonClick (){
fs.readFile('file.txt', (err, inputD) => {
   if (err) throw err;
    array = inputD.toString().split(' ')
    array = array[randomNumber];
    console.log(array)
    fs.appendFile('test.txt', array + '\n', (err) => {
        if (err) throw err;
       });
      
})
}
const button = document.querySelector('button');
button.addEventListener('click', buttonClick);
//console.log(array)