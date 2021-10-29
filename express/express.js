const express = require ('express');

const app = express();

app.set('view engine', 'pug');

// adding root route for request from user
app.get('/', (req, res)=> {
    res.render('index');
});


app.get('/hello', (req, res)=> {
    res.send('<h1>Hello From the Otherside!</h1>');
});

app.listen(3000, () => {
    console.log('the application is running on localhost:3000')
});
