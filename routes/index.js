const pokemonRoutes = require('./pokemonRoutes');
const router = require('express').Router();

router.use('/pokemon', pokemonRoutes);

module.exports = router;