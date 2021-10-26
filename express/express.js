const express = require ('express');

const app = express();


// adding root route for request from user
app.get('/', (req, res)=> {
    res.send('<h1>Hello World!</h1>');
});

app.listen(3000);