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

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const routes = require('./routes/index');

app.use(routes);


// middleware
// app.use((req, res, next) => {
//     console.log('Hello');
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });

// app.use((req, res, next) => {
//     console.log('world');
//     next();
// })


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
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
