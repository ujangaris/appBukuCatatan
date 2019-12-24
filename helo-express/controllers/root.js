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

module.exports = {
    index: index,
    echo: echo
}