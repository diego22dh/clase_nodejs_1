const http = require("http");
const fs = require("fs");
const router = require ("./router");


// Servidor
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    router.route(req, res);
  })
  .listen(3030, "localhost", () => console.log("Server running in 3030 port"));

  