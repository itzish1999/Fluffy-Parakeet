//First I need a module

const express = require('express');

//Express initialize

const app = express();

const port = 8000;

app.listen(port, ()=> {
    console.log('lsiten port 8000');
})

//Create the api

app.get('/Hello_World', (req, res)=>{

    res.send('Hello World');

}) 