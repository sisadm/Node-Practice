const express = require ('express');

const app = express();

app.set('view engine', 'pug');

// adding root route for request from user
app.get('/', (req, res)=> {
    res.render('index');
});


app.get('/cards', (req, res)=> {
    res.locals.prompt = 'Who is buried in Grants tomb?';
    res.render('card');
});

app.listen(3000, () => {
    console.log('the application is running on localhost:3000')
});
