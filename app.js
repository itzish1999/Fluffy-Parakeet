const express = require('express')
const app = express()

//Look up idempotence, know the difference between get, put, patch, post: These are interview questions as well.
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.post('/hello', (req, res) => {
    res.send('Hello World!');
});
app.put('/hello', (req, res) => {
    res.send('Hello World!');
});
app.patch('/hello', (req, res) => {
    res.send('Hello World!');
});
app.listen(8080, () => {
    console.log('Node server running on port 8080')
});