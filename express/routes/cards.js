const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json')
const { cards } = data;


// random cards path

router.get('/', (req, res) => {
    const cardsLength = cards.length;
    let randomNumber = Math.floor(Math.random() * cardsLength);
    res.redirect(`/cards/${randomNumber}`)
})




router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    // if only defined one number after cards/
    if(!side) {
        return res.redirect(`${id}?side=question`);
        
    };

    const name = req.cookies.username;
    const text = cards[id][side]; 
    const { hint } = cards[id];
    const templateData = {text, hint, id, side, name};

    
    
    if(side == 'answer') { 
        templateData.side = 'question';
        templateData.hint = '';
        res.render('card', templateData);
    } else if (side == 'question') {
        templateData.side = 'answer';
        res.render('card', templateData);
    }  
});

module.exports = router;