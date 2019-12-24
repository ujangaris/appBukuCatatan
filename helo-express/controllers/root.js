const {
    getAll
} = require('../models/note.js');


function index(req, res) {
    res.render('index', {
        text: 'Hello'
    })

}

function echo(req, res) {
    const {
        name
    } = req.params;
    res.render('index', {
        text: `Helo ${name}`
    })

}

function index(req, res) {
    const notes = getAll();
    res.render('index', {
        notes: notes
    })
}

module.exports = {
    index: index,
    echo: echo
}