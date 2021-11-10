const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json')
const { cards } = data;

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;
    const text = cards[id][side];
    let { hint } = cards[id];
    const templateData = {text, hint};
    if(side == 'answer') { 
        res.render('card');
    } else {
        res.render('card', templateData);
    }
    
    
});

module.exports = router;