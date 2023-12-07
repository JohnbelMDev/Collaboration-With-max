// //const { log } = require('console');
const fs = require('fs');
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
let holdFileContent
let array
const express = require('express');
const { log } = require('console');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname })

})

app.get('/updateAndREad', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 100);
    fs.readFile('file.txt', (err, inputD) => {
        if (err) throw err;
         array = inputD.toString().split(' ')
        //  once it reach to a certain word spit out 10 text
        // console.log('hi there', array.length)
        let tenText = ''
         array = array[randomNumber];
         for(let i = 0; i < array.length; i++){
            if(array.length == 10){
                tenText+=array[i]
                console.log('hello there', tenText)
                fs.appendFile('test.txt', tenText + '\n', (err) => {
                    if (err) throw err;
                   });
            }
         }       
          fs.appendFile('test.txt', array + '\n', (err) => {
             if (err) throw err;
            });  
            res.sendFile('index.html', {root: __dirname })

     })


})
app.get('/fileSize', (req, res) => {
    var stats = fs.statSync('test.txt');
    var fileSizeInBytes = stats.size;
    console.log(fileSizeInBytes)
    return fileSizeInBytes;

})

app.get('/check', (req, res) => {
   // returns true if online, false if offline
   
   var xhr = new XMLHttpRequest();
    var file = "https://github.com/JohnbelMDev";
    var randomNum = Math.round(Math.random() * 10000);

    xhr.open('HEAD', file + "?rand=" + randomNum, true);
    xhr.send();
    
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
            res.send("connection exists!");
        } else {
            res.send("connection doesn't exist!");
        }
      }
    }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

