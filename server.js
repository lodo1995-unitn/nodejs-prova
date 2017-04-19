
'use strict';

let express = require('express');
let bodyparser = require('body-parser');
let app = express();

var sliderValue = 0;

app.get("/", (req, res) => {
    res.redirect('/public/home.html');
});

app.get('/slider', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({slider: sliderValue}));
});

app.use(bodyparser.json());

app.post('/slider', (req, res) => {
    sliderValue = req.body.slider;
});

app.use('/public', express.static('public'));

app.listen(5000, function() {
    console.log('Server is running on port', 5000);
});
