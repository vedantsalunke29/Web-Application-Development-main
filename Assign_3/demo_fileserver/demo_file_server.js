const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    console.log(q);
    let filename = "." + q.pathname;
    if (filename == "./") filename = "./home";
    filename += ".html";

    console.log(q.pathname);
    console.log(filename);
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080, () => {
    console.log("listening on port 8080");
  });
