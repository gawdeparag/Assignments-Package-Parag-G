//1. Write a nodeJS program that ...... listening from port:3000"
const http = require("http");
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end("Success, I'm listening from port: 3000");
});
server.listen(3000, '127.0.0.1');
console.log("Success, I'm listening from port: 3000");

//2. Show Content: Write a node program that ...... console the content of it.
var fs = require("fs");
// var fileName = process.argv[2];
// fs.readFile(fileName, "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//3. File List: Write a nodeJS program that ...... indicating if it is a directory or a file.
const path = require("path");
const dirPath = path.join(__dirname, '/answer-three-files');
fs.readdir(dirPath, function(err, files) {
    files.forEach(function(file) {
        console.log(file);
    });
});

//4. Write a nodeJS program that creates a txt file with the text passed as a parameter.
var text = process.argv[2];
fs.writeFile('answer-four.txt', text, (err) => {
    if (err) throw err;
    console.log("The file was saved!");
    return;
});

//5. Compare values: Write a nodeJS program that ...... 2 John, should return 2.
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) };
    let occurenceArray = data.match(/John/ig);
    if (occurenceArray === null || occurenceArray.length <= 0) {
        console.log(0);
    } else {
        console.log(occurenceArray.length);
    }
});

//7.

//8.

//9.

//10. Write a nodeJS program that creates a txt file with the text passed as a parameter.
var text = process.argv[2];
fs.writeFile('answer-ten.txt', text, (err) => {
    if (err) throw err;
    console.log("The file was saved!");
    return;
});