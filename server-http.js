const http = require("http");

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });

    response.end("Hello");
});

server.listen(3000, () => {
    console.log("HTTP server running at http://localhost:3000");
});
