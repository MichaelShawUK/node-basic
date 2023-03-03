const http = require("http");
const path = require("path");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "index.html"),
        { encoding: "utf-8" },
        (err, data) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      );
    } else {
      fs.readFile(
        path.join(__dirname, `${req.url.slice(1)}.html`),
        "utf-8",
        (err, data) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            fs.readFile(
              path.join(__dirname, "404.html"),
              "utf-8",
              (err, data) => {
                if (err) throw err;
                res.end(data);
              }
            );
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    }
  })
  .listen(8080);
