const http = require('http');

const server = http.createServer((req, res) => {
    // Set the content type of the response
    

    if (req.url === '/') {
        res.end('Welcome to our site');
    } else if (req.url === '/about') {
        res.end('This is our about page');
    } else {
        res.end('This is not the page you are looking for');
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
