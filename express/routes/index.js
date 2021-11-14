const express = require('express');
const router = express.Router();

// JSON
const { data } = require('../data/flashcardData.json')
const { cards } = data;

// adding root route for request from user
router.get('/', (req, res)=> {
    const name = req.cookies.username
    if(name) {
        res.render('index', {name});
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res)=> {
    const name = req.cookies.username;    
    if(name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
})

// random cards path

router.get('/cards/', (req, res) => {
    const cardsLength = cards.length;
    let randomNumber = Math.floor(Math.random() * cardsLength);
    res.redirect(`${randomNumber}?side=question`)
})

router.post('/hello', (req, res)=> {
    res.cookie('username', req.body.username);
    res.redirect('/');    
})

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});





module.exports = router;