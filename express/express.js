const express = require ('express');

const app = express();


// adding root route for request from user
app.get('/', (request, response)=> {
    response.send('Hello World!');
});

app.listen(3000);