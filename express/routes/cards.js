const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json')
const { cards } = data;

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    let { hint } = cards[id];
    const templateData = {text, hint, id, side};
    if(side == 'answer') { 
        templateData.side = 'question';
        templateData.hint = '';
        res.render('card', templateData);
    } else {
        templateData.side = 'answer';
        res.render('card', templateData);
    }
    
    
});

module.exports = router;