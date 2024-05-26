const router = require('express').Router();
const {Pokemon} = require('../models/index');

router.post('/', (req, res) => {
    Pokemon.create(req.body)
        .then((pokemon) => res.status(200).json(pokemon))
        .catch(err => res.status(400).json(err.message));
});

module.exports = router;