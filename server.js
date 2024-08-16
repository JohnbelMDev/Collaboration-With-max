// //const { log } = require('console');
const fs = require('fs');
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
// const bodyParser= require('body-parser')



let holdFileContent
let array
const express = require('express');
const { log } = require('console');
const app = express()
const port = 3000
let holdText = []
let arrayNew 
// app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.sendFile('html/index.html', {root: __dirname })

})

app.get('/updateAndREad', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 100);
    fs.readFile('file.inputFrom().txt', (err, inputD) => {
        if (err) throw err;
         array = inputD.toString().split(' ')
        //  console.log("see",array[0])
        //  once it reach to a certain word spit out 10 text
        // console.log('hi there', array.length)
        let tenText = ''
        array.length = randomNumber;
        let newLength = array.length
        console.log('new length of array', newLength)
        //  array = array[randomNumber];
        //  console.log('hi hello',array)
        // console.log('hi there', array)

         for(let i = 0; i < newLength; i++){
            console.log('hi hello there',array[i])

            if(newLength >= 10){
                // tenText =array[i]
                // console.log('test',array)
                holdText.push(array[i])
                arrayNew = holdText
                console.log('hello there', holdText)
                fs.appendFile('textFile/test.txt', arrayNew + '\n', (err) => {
                    if (err) throw err;
                   });
            }
         console.log('hello there', holdText)

         }       
        //  console.log('hello there', holdText)
        //   fs.appendFile('test.txt', array + '\n', (err) => {
        //      if (err) throw err;
        //     });  
        console.log('hello there', holdText)

            res.sendFile('html/index.html', {root: __dirname })

     })
    //  console.log('hello there', holdText)



})
app.get('/fileSize', (req, res) => {
    var stats = fs.statSync('textFile/test.txt');
    var fileSizeInBytes = stats.size;
    console.log(fileSizeInBytes)
    return fileSizeInBytes;

})



app.get('/check', (req, res) => {
   // returns true if online, false if offline
   
   var xhr = new XMLHttpRequest();
    // var file = "https://github.com/JohnbelMDev";
// console.log("hello",xhr)
    var file = req.query.internet;
    var randomNum = Math.round(Math.random() * 10000);
    let replaceAllCharacterInString =  file.replace(/[^a-zA-Z ]/g, " ")
    let removeComma = replaceAllCharacterInString.split(',').join('')
    let stringToArray = removeComma.split(' ')
    let removeEmptyelemtFromArray = stringToArray.filter(elm => elm)
    if(!(removeEmptyelemtFromArray[0].includes('http') ||removeEmptyelemtFromArray[0].includes('https'))){
        console.log("erro there buddy")
       
    }
    else{
    //Remove all empty 
     console.log(removeEmptyelemtFromArray[0])
     

    //   if(!(file.includes('http') || file.includes('https'))){
    //     res.send('not valid protocol')
    //   }
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
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

