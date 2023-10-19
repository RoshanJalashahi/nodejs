const { Console } = require('console');
const http = require('http');
const url = require('url');
///// In this session we gone learn about web sever capable of accepting the request and  sending back responses
// the below createServer will accept a callback function each time when a new request or server is hit

//trick select and ctrl + D
// re

//Http header is basically a peice of information about res that we are sending back
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview') {
        res.end('This is from overview');
    } else if (pathName === '/product'){
        res.end('This is from Product');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>this page is not found </h1>');
    }

});

server.listen(8000, '127.0.0.1', ()=> {
    console.log('listening to request on port 8000')
});