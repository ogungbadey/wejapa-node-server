const http = require("http");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Hello World, welcome to WeJapa Internships");
      res.end();
    } else {
      const urlBody = req.url.slice(1);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`Hello ${urlBody}, Welcome to WeJapa Internships`);
      res.end();
    }
  })
  .listen(8080);
