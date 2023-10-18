const fs =require('fs');

// Blocking, synchronously
//const textin = fs.readFileSync('./roshan.txt','utf-8');
//console.log(textin);
//const textout = `Today we learn about file system: ${textin}.\n created on ${Date.now()}`;
//fs.writeFileSync(`./output.txt/`,textout);
//console.log('file is writteen');


// non Blocking Synchronously
fs.readFile('./start.txt' ,'utf-8',(err, data1) => {
    if(err) return console.log("Error !")
    fs.readFile(`./${data1}.txt`,'utf-8',(err, data2) => {
        console.log(data2);
        fs.readFile('./append.txt','utf-8',(err, data3) => {
            console.log(data3);

            fs.writeFile('./final.txt',`${data2}\n${data3}`, 'utf-8', err =>{
                console.log(' your file is written ');

            })
            });
        });
});
console.log('hello there this is an asynchronous function which is non blocking in nature');
