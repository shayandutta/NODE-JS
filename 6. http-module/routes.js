const https = require('http');

const server = https.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('home page')
    }else if(url === '/projects'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end('projects')
    }else{
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('this page is not found: 404 error')
    }
})

const port = 3000;
server.listen(port, () => {
    console.log('server is listening at http://localhost:3000')
})