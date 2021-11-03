const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'pug');

// adding root route for request from user
app.get('/', (req, res)=> {
    res.render('index');
});

app.get('/cards', (req, res)=> {
    res.render('card', { prompt: 'Who is buried in Grants tomb?', colors});
});

app.get('/hello', (req, res)=> {
    res.render('hello');
})

app.post('/hello', (req, res)=> {
    res.cookie('username', req.body.username);
    res.render('hello', { name: req.body.username});
    
})

app.listen(3000, () => {
    console.log('the application is running on localhost:3000')
});
