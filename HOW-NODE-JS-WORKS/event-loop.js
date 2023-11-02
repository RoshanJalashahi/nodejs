const fs = require("fs")

setTimeout(() => console.log("Timer 1 finished"), 2);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile('test-file.txt', () =>{
    console.log("I/O Finished")
})

console.log("Hello from the top level-code")