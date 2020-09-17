const router = require('express').Router();

router.get('/', ( req, res ) => res.render('page'));

module.exports = router;