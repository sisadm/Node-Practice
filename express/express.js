const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const e = require('express');

// ES6
// import express from 'express';
// import { urlencoded } from 'body-parser';
// import cookieParser from 'cookie-parser';
// import e from 'express';

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
app.use(cookieParser());

app.set('view engine', 'pug');


app.use((req, res, next) => {
    console.log('Hello');
    next();
});

app.use((req, res, next) => {
    console.log('world');
    next();
})



// adding root route for request from user
app.get('/', (req, res)=> {
    const name = req.cookies.username
    if(name) {
        res.render('index', {name});
    } else {
        res.redirect('/hello');
    }
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
})

app.get('/cards', (req, res)=> {
    res.render('card', { prompt: 'Who is buried in Grants tomb?', colors});
});

app.get('/hello', (req, res)=> {
    const name = req.cookies.username;    
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
    

})

app.post('/hello', (req, res)=> {
    res.cookie('username', req.body.username);
    res.redirect('/');
    
})

app.listen(3001, () => {
    console.log('the application is running on localhost:3000')
});
