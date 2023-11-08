const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  ///// solution 1
  // fs.readFile('test-file.txt', (err,data) => {
  //   if (err)  console.log(err);
  // res.end(data);
  //});

  ///// solution 2: streams
  // const readable = fs.createReadStream('test-file.txt');
  // readable.on('data', chunk => {
  //     res.write(chunk);

  // })
  // readable.on('end', () => {
  //     res.end();
  // })

  // readable.on('error', err => {
  //     console.log("error");
  //     res.statusCode = 500;
  //     res.end("file not found");
  // });

  // solution 3 final solution
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readablesource.pipe(wrirteable dest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening .....");
});
