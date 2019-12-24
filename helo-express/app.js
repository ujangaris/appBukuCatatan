const express = require('express');
const layouts = require('express-ejs-layouts');
const router = require('./routes/router.js');
const app = express();
//Static File
app.use(express.static('public'));

//Setup Views
app.set('view engine', 'ejs')
app.use(layouts);


//Setup Routes
app.use(router);

//Setup helpers
app.locals.noteAge = require('./util/helpers.js').noteAge


module.exports = app