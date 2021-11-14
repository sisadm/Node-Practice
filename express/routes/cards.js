const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json')
const { cards } = data;


// random cards path

router.get('/', (req, res) => {
    const cardsLength = cards.length;
    let randomNumber = Math.floor(Math.random() * cardsLength);
    res.redirect(`${randomNumber}?side=question`)
})




router.get('/:id', (req, res) => {
    let { side } = req.query;
    let { id } = req.params;
    let text = cards[id][side]; 
    let { hint } = cards[id];
    let templateData = {text, hint, id, side};

    // if only defined one number after cards/
    if(id >= 0 && side == undefined) {
        side = 'question';
        res.redirect(`${id}?side=${side}`);
    };
    
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