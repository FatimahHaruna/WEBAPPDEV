const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Practicing how to create a server!\n')
});
server.listen(PORT, 'localhost',() => {
    console.log(`Server running at http://localhost${PORT}\n`)
});

//write asynchronous file reading using fs.readFile with an error handling callback
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }  
    console.log("File contents:", data);
});

