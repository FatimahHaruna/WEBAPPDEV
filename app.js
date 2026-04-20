console.log("Hello Nodejs!");

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js server!");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//This is the main entry point of the application. It sets up a simple HTTP server that listens on port 3000 and responds with a plain text message when accessed. The server is created using the built-in 'http' module in Node.js.   The console.log statement at the beginning is used to print a message to the console when the application starts.
//Creates a server that listens on port 3000 and responds with "Hello from Node.js server!" when accessed. The server is created using the built-in 'http' module in Node.js. 