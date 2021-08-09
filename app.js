const express = require('express');
const http = require('http');

const app = express();
const port = 3050

const router1 = express.Router();
const router2 = express.Router();

app.use(router1);
app.use(router2);

router1.get('/', (req, res) => {
    res.send('Welcome')
});

router1.get('/1', (req, res) => {
    res.send('Router1 is working')
});

router2.get('/2', (req, res) => {
    res.send('Router2 is working')
});

app.listen(port,  () => {
    console.log(`Listening on port ${port}`)
});

// app.listen(port,  function() {
//     console.log(`Listening on port ${port}`)
// });

// const server = http.createServer(app);
// server.listen(port)