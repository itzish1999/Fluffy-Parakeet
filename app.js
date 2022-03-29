const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.end('Hello World!');
});

app.listen(8080, () => {
    console.log('Node server running on port 8080')
});