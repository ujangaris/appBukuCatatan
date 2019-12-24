const {
    Router
} = require('express');
const rootController = require('../controllers/root.js');
const router = new Router();

router.get('/', rootController.index)
router.get('/echo/:name', rootController.echo)
router.get('*', (req, res) => {
    res.render('index', {
        text: 'Hello'
    })
});



module.exports = router