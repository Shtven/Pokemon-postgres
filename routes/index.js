const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/pokemon', controllers.createPokemon);
router.get('/pokemon', controllers.getAllPokemons);

module.exports = router;
