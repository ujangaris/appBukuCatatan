const express = require('express');
const router = require('./routes/router.js');
const app = express();

//Static File
app.use(express.static('public'));

//Setup Views
app.set('view engine', 'ejs')


//Setup Routes
app.use(router);



module.exports = app