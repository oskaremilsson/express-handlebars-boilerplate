"use strict";

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();


app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('index', {layout: false});
});


app.listen(8000, function(){
    console.log("Server listening to port 8000");
});