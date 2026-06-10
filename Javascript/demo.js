const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Practicing how to create a server!\n')
});
server.listen(PORT, 'localhost',() => {
    console.log(`Server running at http://localhost${PORT}\n`)
});