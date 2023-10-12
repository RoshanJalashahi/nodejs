const fs =require('fs');
const textin = fs.readFileSync('./roshan.txt','utf-8');
console.log(textin);
const textout = `Today we learn about file system: ${textin}.\n created on ${Date.now()}`;
fs.writeFileSync(`./output.txt/`,textout);
console.log('file is writteen');
