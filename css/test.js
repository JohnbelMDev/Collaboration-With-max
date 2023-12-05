// //const { log } = require('console');
const fs = require('fs');
let holdFileContent
let array
// let data = "How to write a file in Javascript."

// let randomNumber = Math.floor(Math.random() * 100);
//  function buttonClick (){
// // fs.readFile('file.txt', (err, inputD) => {
// //    if (err) throw err;
// //     array = inputD.toString().split(' ')
// //     array = array[randomNumber];
// //     console.log(array)
// //     fs.appendFile('test.txt', array + '\n', (err) => {
// //         if (err) throw err;
// //        });
      
// // })
// }
// const button = document.querySelector('button');
// button.addEventListener('click', buttonClick);
//console.log(array)

// //return the print text back to the user

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
         
        //  if(array == 'you'){
                
        //  }
        //  console.log('hello',array.length)
        //  console.log('hello',array)
       
         array = array[randomNumber];
        //  console.log('checking',array.length)
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
    
    // var stats = fs.statSync("test.txt")
    // var fileSizeInBytes = stats.size;
    // // Convert the file size to megabytes (optional)
    // var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
    // console.log(fileSizeInMegabytes)
    var stats = fs.statSync('test.txt');
    var fileSizeInBytes = stats.size;
    console.log(fileSizeInBytes)
    return fileSizeInBytes;

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})