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


// middleware
app.use((req, res, next) => {
    console.log('Hello');
    const err = new Error('Oh noes!');
    err.status = 500;
    next(err);
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

app.get('/cards', (req, res)=> {
    res.render('card', { prompt: 'Who is buried in Grants tomb?'});
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

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

// error middleware handler (need 4 parameters)

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log('the application is running on localhost:3000')
});
