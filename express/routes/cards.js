const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json')
const { cards } = data;

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    let { hint } = cards[id];
    
    if(side == 'answer') { 
        res.render('card', text);
    } else {
        let templateData = {text, hint};
        res.render('card', templateData);
    }
    const templateData = {text, hint};
    
});

module.exports = router;