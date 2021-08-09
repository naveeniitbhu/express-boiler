const http = require('http');
const port = 3050
const server = http.createServer((request, response) => {
    // console.log('headers',request.headers);
    console.log('method',request.method);
    console.log('url',request.url);
    const user = {
        name: 'john',
        hobby: 'Skating'
    }
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify(user));
})
server.listen(port);