const express = require('express');
const router = require('./routes/router.js');
const app = express();


//Setup Routes
app.use(router);



module.exports = app