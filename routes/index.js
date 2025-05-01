const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/pokemon', controllers.createPokemon);
router.get('/pokemon', controllers.getAllPokemons);
router.get('/pokemon/:id', controllers.getPokemonById);
router.delete('/pokemon/:id', controllers.deletePokemon);
router.put('/pokemon/:id', controllers.updatePokemon);

module.exports = router;
