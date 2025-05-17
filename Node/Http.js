const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
    url = req.url;
    if(url === '/home'){
        if(req.method === 'GET'){
            res.writeHead(200, {'Conten-Type' : 'application/json'});
            res.write(JSON.stringify({message : 'Received GET request'}));;
            res.end();
        }
        else if(req.method === 'POST'){
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            })
            req.on('end', ()=>{
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({ message : 'Received POST request', data : JSON.parse(body) }));
                res.end();
            })
        }
        else if(req.method === 'PUT'){
            let body ='';
             req.on('data', (chunk) => {
                body += chunk;
             });
             req.on('end', () => {
                res.writeHead(200, {'Content-Type' : 'application/json'});
                res.write(JSON.stringify({ message : 'Received PUT request', data : JSON.parse(body) }));
                res.end();
             })
        }
        else if(req.method === 'DELETE'){
            res.writeHead(200, {'Content-Type' : 'application/json'});
            res.write(JSON.stringify({ message : 'Received DELETE request' }));
            res.end();
        }
    }
    else if(url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else if(url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Contact Page</h1>');
        res.end();
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})